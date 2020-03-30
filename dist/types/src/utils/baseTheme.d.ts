/** Импорт React нужен для tsc. */
import React from 'react';
/**
 * Default GDS theme.
 */
declare const baseTheme: {
    palettes: {
        grey: string[];
        blue: string[];
        red: string[];
    };
    colors: {
        black: string;
        grey0: string;
        grey20: string;
        grey40: string;
        grey60: string;
        grey70: string;
        grey90: string;
        white: string;
        fade: string;
        brand: string;
        brandHover: string;
        brandSecond: string;
        brandSecondHover: string;
        error: string;
        warning: string;
        success: string;
        tagHit: string;
        tagSale: string;
        tagNew: string;
    };
    typography: {
        breakpoints: number[];
        styles: {
            buttonLg: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            buttonMd: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                    fontVariantNumeric: string;
                };
            };
            buttonSm: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            captionUppercase: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                    letterSpacing: string;
                    textTransform: string;
                };
            };
            caption: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                    letterSpacing: string;
                };
            };
            smallBold: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            small: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            bodyBold: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                    fontVariantNumeric: string;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            body: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            subheading: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            title: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            headline: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            h4: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            h3: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            h2: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                };
            };
            h1: {
                desktop: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                    letterSpacing: string;
                };
                mobile: {
                    fontFamily: string;
                    fontWeight: number;
                    fontSize: string;
                    lineHeight: number;
                    letterSpacing: string;
                };
            };
        };
    };
    layout: {
        cols: {
            xxxl: number;
            md: number;
            xs: number;
            xxs: number;
        };
        container: {
            xxxl: number;
            xl: string;
        };
        marginLeft: {
            xxxl: string;
            xl: number;
        };
        marginRight: {
            xxxl: string;
            xl: number;
        };
        breakpoints: {
            xxxl: number;
            xxl: number;
            xl: number;
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxs: number;
            xxxs: number;
        };
        gap: {
            xxxl: number;
            sm: number;
        };
        padding: {
            xl: number;
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxxs: number;
        };
    };
    shadows: {
        small: string;
        big: string;
        inner: string;
    };
} & {
    global: {
        placeholder: React.FC<React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>;
        fonts: {
            fontFace: {
                'PT Root UI': ({
                    woff2: string;
                    woff: string;
                } | {
                    woff2: string;
                    woff: string;
                    weight: number;
                } | {
                    vf: string;
                    weight: string;
                })[];
            };
            stacks: {
                'PT Root UI': string;
            };
        };
        base: {
            selection: {
                color: string;
                bg: string;
            };
            focus: {
                width: number;
                color: string;
                offset: number;
            };
            body: {
                typography: string;
                color: string;
                bg: string;
            };
        };
    };
    components: {
        Button: {
            base: {
                default: {
                    round: boolean;
                    half: boolean;
                };
            };
            sizes: {
                lg: {
                    height: number;
                    padding: number;
                    iconSize: number;
                    iconOffset: number;
                    typography: string;
                };
                md: {
                    height: number;
                    padding: number;
                    iconSize: number;
                    iconOffset: number;
                    typography: string;
                };
                sm: {
                    height: number;
                    padding: number;
                    iconSize: number;
                    iconOffset: number;
                    typography: string;
                };
            };
            themes: {
                primary: {
                    default: {
                        color: string;
                        bg: string;
                    };
                    hover: {
                        bg: string;
                    };
                    active: {
                        border: string;
                        shadow: string;
                    };
                    disabled: {
                        bg: string;
                        color: string;
                    };
                };
                secondary: {
                    default: {
                        color: string;
                        border: string;
                        bg: string;
                    };
                    hover: {
                        color: string;
                        border: string;
                    };
                    active: {
                        bg: string;
                        border: string;
                        shadow: string;
                    };
                    disabled: {
                        border: string;
                        color: string;
                    };
                };
            };
        };
    };
};
export default baseTheme;
