const pxToRem = px => px / 16;

const getFluidStyles = (maxFs, minFs, maxVw, minVw) => {
    const mq = [maxVw, minVw].map(bp => `@media (max-width: ${bp}px)`);

    return {
        fontSize: maxFs,
        [mq[0]]: {
            fontSize: `calc(${minFs} + ((100vw - ${pxToRem(minVw)}rem) / (${pxToRem(maxVw)} - ${pxToRem(
                minVw,
            )})) * (${parseFloat(maxFs)} - ${parseFloat(minFs)}))`,
        },
        [mq[1]]: {
            fontSize: minFs,
        },
    };
};

const addFontStack = (font, stack) => {
    if (!stack) return font;
    return `"${font}", ${stack}`;
};

const removeFontFamily = styles => {
    if (!styles) return undefined;
    return Object.keys(styles)
        .filter(name => name !== 'fontFamily')
        .reduce(
            (acc, key) => ({
                ...acc,
                [key]: styles[key],
            }),
            {},
        );
};

// TODO Можно ли что-то придумать с опусканием объекта темы? Он бесит

const typography = (name, theme) => {
    if (!name) {
        console.warn('name argument is not defined');
        return;
    }

    const typography = theme.typography[name];
    let fontFamilyStyles = {
        fontFamily: typography.desktop.fontFamily,
    };

    if (theme.typography.fonts) {
        const fontName = Object.keys(theme.typography.fonts).find(name => name === typography.desktop.fontFamily);
        const font = theme.typography.fonts[fontName];
        fontFamilyStyles.fontFamily = addFontStack(fontFamilyStyles.fontFamily, font.stack);

        if (font.vf) {
            fontFamilyStyles = {
                ...fontFamilyStyles,
                '@supports (font-variation-settings: normal)': {
                    fontFamily: addFontStack(font.vf, font.stack),
                },
            };
        }
    }

    const desktopStyles = removeFontFamily(typography.desktop);
    const mobileStyles = removeFontFamily(typography.mobile);
    let fluidStyles = {};
    let mainStyles = desktopStyles;

    if (typography.mobile) {
        const { fontSize: maxFs, ...desktopStylesWithoutFs } = desktopStyles;
        const { fontSize: minFs, ...mobileStylesWithoutFs } = mobileStyles;
        const [maxVw, minVw] = theme.typography.breakpoints;
        const uniqueMobileStyles = Object.keys(mobileStylesWithoutFs)
            .filter(
                name => desktopStylesWithoutFs[name] && desktopStylesWithoutFs[name] === mobileStylesWithoutFs[name],
            )
            .reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: mobileStylesWithoutFs[key],
                }),
                {},
            );
        mainStyles = {
            ...desktopStylesWithoutFs,
            [`@media (max-width: ${minVw})`]: { ...uniqueMobileStyles },
        };

        if (theme.typography.fluid !== false) {
            fluidStyles = getFluidStyles(maxFs, minFs, maxVw, minVw);
        } else {
            fluidStyles = {
                fontSize: maxFs,
                [`@media (max-width: ${minVw}px)`]: {
                    fontSize: minFs,
                },
            };
        }
    }

    return {
        ...fontFamilyStyles,
        ...mainStyles,
        ...fluidStyles,
    };
};

export default typography;
