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

async function serializeContainerClass(config, tokens) {
    const { layout } = tokens;

    const stylesByBreakpoints = Object.keys(layout.breakpoints).reduce((acc, breakpointKey) => {
        Object.keys(STYLES_ENUM).forEach((key) => {
            const value = layout[key][breakpointKey];
            if (typeof value === 'undefined') return;
            if (!acc[breakpointKey]) acc[breakpointKey] = [];
            acc[breakpointKey].push(STYLES_ENUM[key](value));
        });
        return acc;
    }, {});

    const styles = Object.entries(stylesByBreakpoints).reduce((acc, [breakpointKey, breakpointValue]) => {
        const mediaQuery = breakpointKey !== BREAKPOINT_MAX ? `@include mq($${breakpointKey})` : '';
        const style = breakpointValue.join(' ');
        return `${acc} ${mediaQuery ? `${mediaQuery} { ${style} }` : style}`;
    }, '');

    const fileData = `.${TITLE} { ${styles} }`;
    writeFile({ name: TITLE, fileData, config });
}

module.exports = serializeContainerClass;
