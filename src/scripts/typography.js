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

const typography = (theme, name) => {
    const typography = theme.typography[name];
    let mainStyles = typography.desktop;
    let fluidStyles = {};

    if (typography.mobile) {
        const { fontSize: maxFs, ...desktopStyles } = typography.desktop;
        const { fontSize: minFs, ...mobileStyles } = typography.mobile;
        const [maxVw, minVw] = theme.typography.breakpoints;
        const uniqueMobileStyles = Object.keys(mobileStyles)
            .filter(name => desktopStyles[name] && desktopStyles[name] === mobileStyles[name])
            .reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: mobileStyles[key],
                }),
                {},
            );
        mainStyles = {
            ...desktopStyles,
            [`@media (max-width: ${minVw})`]: { ...uniqueMobileStyles },
        };
        fluidStyles = getFluidStyles(maxFs, minFs, maxVw, minVw);
    }

    return {
        ...mainStyles,
        ...fluidStyles,
    };
};

export default typography;
