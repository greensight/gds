import { CSSObject } from '@emotion/react';
import { TypographyProperties } from '../types/Typography';
import Theme from '../types/Theme';
import { PartialBy } from '../types/Utils';
import baseTheme from './baseTheme';

/**
 * Helper for typography styles usage. Generate typography CSS rules by style name included mobile version, fluid typography and variable fonts support.
 *
 * By default helper uses GDS base theme. Recommended way to use this helper with your own theme is define wrapper with your theme as second argument:
 *
 * ```
 * import { typography as typographyHelper } from '@greensight/gds';
 * import theme from '@scripts/theme';
 *
 * const typography = (name: string) => typographyHelper(name, theme);
 *
 * export default typography;
 * ```
 */
const typography = (name: string | undefined, theme: Theme = baseTheme as Theme): CSSObject => {
    if (!name) {
        console.warn('"name" argument is not defined.');
        return {};
    }

    if (!theme.typography || !theme.typography.styles[name]) {
        console.warn(`Typography style ${name} is not defined.`);
        return {};
    }

    const typographyStyle = theme.typography.styles[name];
    const fontName = typographyStyle.desktop.fontFamily;
    const globalFontsTheme = theme.global?.fonts;
    const stack = globalFontsTheme?.families?.[fontName]?.stack || 'sans-serif';
    let fontFamilyStyles: CSSObject = { fontFamily: `"${fontName}", ${stack}` };

    const isVf = globalFontsTheme?.families?.[fontName]?.vf;
    if (isVf) {
        fontFamilyStyles = {
            ...fontFamilyStyles,
            '@supports (font-variation-settings: normal)': {
                fontFamily: `"${fontName} VF", ${stack}`,
            },
        };
    }

    const desktopStyles = removeFontFamily(typographyStyle.desktop);
    let mqMobileStyles: CSSObject = {};
    let fluidStyles: CSSObject = {};
    let mainStyles: PartialBy<TypographyProperties, 'fontSize' | 'fontFamily'> | undefined = desktopStyles;
    const [maxVw, minVw] = theme.typography.breakpoints;
    const mq = [maxVw, minVw].map((bp) => `@media (max-width: ${bp}px)`);

    if (typographyStyle.mobile) {
        const mobileStyles = removeFontFamily(typographyStyle.mobile);
        const { fontSize: maxFs, ...desktopStylesWithoutFs } = desktopStyles;
        const { fontSize: minFs, ...mobileStylesWithoutFs } = mobileStyles;
        const mobileStyleEntries = Object.entries(mobileStylesWithoutFs) as [keyof typeof mobileStylesWithoutFs, any];
        const uniqueMobileStyles = Object.fromEntries(
            mobileStyleEntries.filter(
                ([name]: [keyof typeof mobileStylesWithoutFs]) =>
                    !desktopStylesWithoutFs[name] || desktopStylesWithoutFs[name] !== mobileStylesWithoutFs[name],
            ),
        );

        mainStyles = desktopStylesWithoutFs;
        mqMobileStyles = uniqueMobileStyles;

        let isFluid = true;
        const fluidSettings = globalFontsTheme?.fluid;
        if (fluidSettings !== undefined) {
            isFluid = Array.isArray(fluidSettings) ? !fluidSettings.includes(name) : fluidSettings;
        }

        if (isFluid) {
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

const removeFontFamily = (styles: TypographyProperties) => {
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
