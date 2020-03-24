import { CSSObject } from '@emotion/core';
import { TypographyProperties } from '../typings/Typography.d';
import Theme from '../typings/Theme.d';

const typography = (name: string, theme: Theme): CSSObject => {
    if (!name) {
        console.warn('"name" argument is not defined');
        return;
    }

    const typography = theme.typography[name];

    if (!typography) {
        console.warn(`typography style ${name} is not defined`);
        return;
    }

    const fontName = typography.desktop.fontFamily;
    const stack = theme.typography.stacks?.[fontName] || 'sans-serif';
    let fontFamilyStyles: CSSObject = { fontFamily: `"${fontName}", ${stack}` };

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
    let fluidStyles: CSSObject = {};
    let mainStyles: PartialBy<TypographyProperties, 'fontSize' | 'fontFamily'> = desktopStyles;
    const [maxVw, minVw] = theme.typography.breakpoints;
    const mq = [maxVw, minVw].map(bp => `@media (max-width: ${bp}px)`);

    if (typography.mobile) {
        const { fontSize: maxFs, ...desktopStylesWithoutFs } = desktopStyles;
        const { fontSize: minFs, ...mobileStylesWithoutFs } = mobileStyles;
        const uniqueMobileStyles = Object.fromEntries(
            Object.entries(mobileStylesWithoutFs).filter(
                ([name]) =>
                    !desktopStylesWithoutFs[name] || desktopStylesWithoutFs[name] !== mobileStylesWithoutFs[name],
            ),
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

const pxToRem = (px: number) => px / 16;

const removeFontFamily = (styles: TypographyProperties | undefined) => {
    if (!styles) return undefined;
    type TypographyKeys = keyof TypographyProperties;
    const entries = Object.entries(styles);
    const filteredEntries = entries.filter(([name]) => name !== 'fontFamily') as [
        Omit<TypographyKeys, 'fontFamily'>,
        TypographyProperties[TypographyKeys],
    ][];
    const filteredStyles = Object.fromEntries(filteredEntries) as Omit<TypographyProperties, 'fontFamily'>;
    return filteredStyles;
};

export default typography;
