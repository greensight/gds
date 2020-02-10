const typography = (name, theme) => {
    if (!name) {
        console.warn('"name" argument is not defined');
        return;
    }

    const typography = theme.typography[name];
    const fontName = typography.desktop.fontFamily;
    const stack = theme.typography.stacks?.[fontName] || 'sans-serif';
    let fontFamilyStyles = { fontFamily: `"${fontName}", ${stack}` };

    const isVf = theme.global?.fonts?.[fontName]?.some(({ vf }) => vf);
    if (isVf) {
        fontFamilyStyles = {
            ...fontFamilyStyles,
            '@supports (font-variation-settings: normal)': {
                fontFamily: `"${fontName} VF", ${stack}`,
            },
        };
    }

    const desktopStyles = removeFontFamily(typography.desktop);
    const mobileStyles = removeFontFamily(typography.mobile);
    let mqMobileStyles = {};
    let fluidStyles = {};
    let mainStyles = desktopStyles;
    const [maxVw, minVw] = theme.typography.breakpoints;
    const mq = [maxVw, minVw].map(bp => `@media (max-width: ${bp}px)`);

    if (typography.mobile) {
        const { fontSize: maxFs, ...desktopStylesWithoutFs } = desktopStyles;
        const { fontSize: minFs, ...mobileStylesWithoutFs } = mobileStyles;
        const uniqueMobileStyles = Object.keys(mobileStylesWithoutFs)
            .filter(
                name => !desktopStylesWithoutFs[name] || desktopStylesWithoutFs[name] !== mobileStylesWithoutFs[name],
            )
            .reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: mobileStylesWithoutFs[key],
                }),
                {},
            );

        mainStyles = desktopStylesWithoutFs;
        mqMobileStyles = uniqueMobileStyles;

        if (theme.typography.fluid !== false && typography.fluid !== false) {
            fluidStyles = {
                fontSize: maxFs,
                [mq[0]]: {
                    fontSize: `calc(${minFs} + ((100vw - ${pxToRem(minVw)}rem) / (${pxToRem(maxVw)} - ${pxToRem(
                        minVw,
                    )})) * (${parseFloat(maxFs)} - ${parseFloat(minFs)}))`,
                },
            };
        } else {
            fluidStyles = { fontSize: maxFs };
        }

        mqMobileStyles = {
            ...mqMobileStyles,
            fontSize: minFs,
        };
    }

    return {
        ...fontFamilyStyles,
        ...mainStyles,
        ...fluidStyles,
        [mq[1]]: mqMobileStyles,
    };
};

const pxToRem = px => px / 16;

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

export default typography;
