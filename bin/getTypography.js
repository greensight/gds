const convertFontSize = px => `${px / 16}rem`;
const convertLineHeight = percents => Math.trunc(percents) / 100;
const convertLetterSpacing = (px, fontSize) => (px !== 0 ? `${(px / fontSize).toFixed(2)}em` : undefined);
const convertTextTransform = figmaValue => {
    if (!figmaValue) return undefined;
    const CssValues = ['uppercase', 'lowercase', 'capitalize'];
    const FigmaValues = ['UPPER', 'LOWER', 'TITLE'];
    return CssValues[FigmaValues.findIndex(value => figmaValue === value)];
};
const convertTextDecoration = figmaValue => {
    if (!figmaValue) return undefined;
    const CssValues = ['underline', 'line-through'];
    const FigmaValues = ['UNDERLINE', 'STRIKETHROUGH'];
    return CssValues[FigmaValues.findIndex(value => figmaValue === value)];
};

const getStyles = text => ({
    fontFamily: text.style.fontFamily,
    fontWeight: text.style.fontWeight,
    fontSize: convertFontSize(text.style.fontSize),
    lineHeight: convertLineHeight(text.style.lineHeightPercentFontSize),
    letterSpacing: convertLetterSpacing(text.style.letterSpacing, text.style.fontSize),
    fontStyle: text.style.italic && 'italic',
    textTransform: convertTextTransform(text.style.textCase),
    textDecoration: convertTextDecoration(text.style.textDecoration),
    fontVariantNumeric: text.style.opentypeFlags && text.style.opentypeFlags.TNUM && 'tabular-nums',
});

const getTypography = frame => {
    const breakpointsFrame = frame.children.find(item => item.name === 'breakpoints');
    const firstPoint = Number(breakpointsFrame.children[0].name);
    const secondPoint = Number(breakpointsFrame.children[1].name);
    const breakpointsTokens = {
        breakpoints: [Math.max(firstPoint, secondPoint), Math.min(firstPoint, secondPoint)],
    };

    const desktopFrame = frame.children.find(item => item.name === 'desktop');
    const mobileFrame = frame.children.find(item => item.name === 'mobile');
    const textTokens = desktopFrame.children.reduce((acc, text) => {
        const mobileText = mobileFrame.children.find(mobileText => mobileText.name === text.name);
        return {
            ...acc,
            [text.name]: {
                desktop: getStyles(text),
                mobile: mobileText && getStyles(mobileText),
            },
        };
    }, {});

    const tokens = {
        ...breakpointsTokens,
        ...textTokens,
    };

    return tokens;
};

module.exports = getTypography;
