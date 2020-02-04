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

const typography = (name, theme) => {
    if (!name) {
        console.warn('"name" argument is not defined');
        return;
    }

    const typography = theme.typography[name];
    const fontName = typography.desktop.fontFamily;
    const stack = (theme.typography.stacks && theme.typography.stacks[fontName]) || 'sans-serif';
    let fontFamilyStyles = {
        fontFamily: `"${fontName}", ${stack}`,
    };

    const isVf =
        theme.global &&
        theme.global.fonts &&
        theme.global.fonts[fontName] &&
        theme.global.fonts[fontName].some(({ vf }) => vf);
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

        if (theme.typography.fluid !== false && typography.fluid !== false) {
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
