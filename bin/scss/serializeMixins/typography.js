const getKebabCaseFromCamel = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const getStyles = (styles) =>
    Object.keys(styles).reduce((acc, styleKey) => {
        const defaultStyleValue = styles[styleKey];
        const styleValue = styleKey === 'fontFamily' ? `'${defaultStyleValue}', sans-serif` : defaultStyleValue;
        return `${acc}${getKebabCaseFromCamel(styleKey)}: ${styleValue};\n`;
    }, '');

const pxToRem = (px) => px / 16;

const getTypographyMixin = (name, typographyStyles, breakpointsParam) => {
    const styles = [];

    const [maxVw, minVw] = breakpointsParam;
    const mixinHead = `@mixin ${name}Typography {`;
    const desktopStyles = getStyles(typographyStyles.desktop);
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

        const mobileStyles = `@media (max-width: ${minVw}px) { ${getStyles(mobileTypography)}}`;

        styles.push(...[tabletStyles, mobileStyles]);
    }

    const mixinFooter = `}`;
    styles.push(mixinFooter);
    return styles.join('\n\n');
};

module.exports = { getTypographyMixin };
