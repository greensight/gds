const getKebabCaseFromCamel = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const getFontFamilyStyle = (styleValue, fontFamilies) => {
    const configValue = fontFamilies[styleValue];
    if (configValue) return `${configValue}, sans-serif`;
    return `'${styleValue}', sans-serif`;
};

const getStyles = (styles, config) => {
    const fontFamilies = config.scss?.typography?.fontFamily || {};
    return Object.keys(styles).reduce((acc, styleKey) => {
        const defaultStyleValue = styles[styleKey];
        const styleValue =
            styleKey === 'fontFamily' ? getFontFamilyStyle(defaultStyleValue, fontFamilies) : defaultStyleValue;

        return `${acc}${getKebabCaseFromCamel(styleKey)}: ${styleValue};\n`;
    }, '');
};

const pxToRem = (px) => px / 16;

const getTypographyMixin = ({ name, typographyStyles, breakpoints, config }) => {
    const styles = [];

    const [maxVw, minVw] = breakpoints;
    const mixinHead = `@mixin ${name}Typography {`;
    const desktopStyles = getStyles(typographyStyles.desktop, config);
    styles.push(...[mixinHead, desktopStyles]);

    if (typographyStyles.mobile) {
        const maxFs = typographyStyles.desktop.fontSize;
        const minFs = typographyStyles.mobile.fontSize;

        const tabletStyles = `@media (max-width: ${maxVw}px) {
        font-size: ${`calc(${minFs} + ((100vw - ${pxToRem(minVw)}rem) / (${pxToRem(maxVw)} - ${pxToRem(
            minVw,
        )})) * (${parseFloat(maxFs)} - ${parseFloat(minFs)}))`}
    }`;

        const mobileTypography = Object.entries(typographyStyles.mobile).reduce((acc, [key, value]) => {
            if (typographyStyles.desktop[key] !== value) {
                acc[key] = value;
            }
            return acc;
        }, {});

        const mobileStyles = `@media (max-width: ${minVw}px) { ${getStyles(mobileTypography, config)}}`;

        styles.push(...[tabletStyles, mobileStyles]);
    }

    const mixinFooter = `}`;
    styles.push(mixinFooter);
    return styles.join('\n\n');
};

module.exports = { getTypographyMixin };
