const writeFile = require('./writeFile');

const TITLE = 'container';
const BREAKPOINT_MAX = 'xxxl';
const getStyle = (key, value) => {
    return `${key}: ${value};`;
};

const STYLES_ENUM = Object.freeze({
    container: (value) => getStyle('max-width', typeof value === 'number' ? `${value}px` : value),
    marginLeft: (value) => getStyle('margin-left', typeof value === 'number' ? `${value}px` : value),
    marginRight: (value) => getStyle('margin-right', typeof value === 'number' ? `${value}px` : value),
    padding: (value) => getStyle('padding', `0 ${value}px`),
});

const imports = ["@import './mixins.scss';", "@import './variables.scss';"].join('\n');

async function serializeContainerMixin(config, tokens) {
    const { layout } = tokens;
    const layer = config.scss.components?.container?.layer;

    const stylesByBreakpoints = Object.keys(layout.breakpoints).reduce((acc, breakpointKey, index, breakpointKeys) => {
        Object.keys(STYLES_ENUM).forEach((key) => {
            const value = layout[key][breakpointKey];
            if (typeof value === 'undefined') return;
            const prevBreakpointKey = index ? breakpointKeys[index - 1] : breakpointKeys[index];
            if (!acc[prevBreakpointKey]) acc[prevBreakpointKey] = [];
            acc[prevBreakpointKey].push(STYLES_ENUM[key](value));
        });
        return acc;
    }, {});

    const styles = Object.entries(stylesByBreakpoints).reduce((acc, [breakpointKey, breakpointValue]) => {
        const mediaQuery = breakpointKey !== BREAKPOINT_MAX ? `@include mq($${breakpointKey})` : '';
        const style = breakpointValue.join(' ');
        return `${acc} ${mediaQuery ? `${mediaQuery} { ${style} }` : style}`;
    }, '');

    const cssClass = `.${TITLE} { ${styles} }`;

    const mixin = `@mixin container {
        ${layer ? `@layer ${layer} { ${cssClass} }` : cssClass}
    }`;
    const fileData = [imports, mixin].join('\n');
    writeFile({ name: 'containerMixin', fileData, config });
}

module.exports = serializeContainerMixin;
