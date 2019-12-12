const convertFontSize = px => `${(px / 16).toFixed(3)}rem`;
const convertLineHeight = percents => Math.trunc(percents) / 100;
const convertLetterSpacing = (px, fontSize) => `${(px / fontSize).toFixed(2)}em`;

const getPalettes = figmaTree => {
    const typographyFrame = figmaTree.document.children
        .find(artboard => artboard.name === 'Greensight DS')
        .children.find(frame => frame.name === 'Typography');

    const desktopFrame = typographyFrame.children.find(item => item.name === 'desktop');
    const mobileFrame = typographyFrame.children.find(item => item.name === 'mobile');

    const tokens = desktopFrame.children.reduce((acc, text) => {
        const mobileText = mobileFrame.children.find(mobileText => mobileText.name === text.name);

        return {
            ...acc,
            [text.name]: {
                desktop: {
                    fontFamily: text.style.fontFamily,
                    fontWeight: text.style.fontWeight,
                    fontSize: convertFontSize(text.style.fontSize),
                    lineHeight: convertLineHeight(text.style.lineHeightPercentFontSize),
                    letterSpacing: convertLetterSpacing(text.style.letterSpacing, text.style.fontSize),
                    fontStyle: text.style.fontStyle,
                    textTransform: text.style.textTransform,
                },
                mobile: mobileText && {
                    fontFamily: mobileText.style.fontFamily,
                    fontWeight: mobileText.style.fontWeight,
                    fontSize: convertFontSize(mobileText.style.fontSize),
                    lineHeight: convertLineHeight(mobileText.style.lineHeightPercentFontSize),
                    letterSpacing: convertLetterSpacing(mobileText.style.letterSpacing, mobileText.style.fontSize),
                    fontStyle: mobileText.style.fontStyle,
                    textTransform: mobileText.style.textTransform,
                },
            },
        };
    }, {});

    console.log(JSON.stringify(tokens, null, 2));

    return tokens;
};

module.exports = getPalettes;
