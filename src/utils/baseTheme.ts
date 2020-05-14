/** Импорт React нужен для tsc. */
import React from 'react';
import deepmerge from 'deepmerge';
import PlaceholderIcon from '../icons/tokens/medium/placeholder.svg';
import scale from './scale';
import { FONT_STACK } from '../helpers/constants';
import tokens from '../../public/tokens.json';

const { colors, shadows } = tokens;

/* Здесь умышленно не используется createTheme, т.к. она возвращает тип Theme, а базовую тему хочется использовать как константу, чтобы при вводе baseTheme.colors. выводились все цвета + не выдавалось излишних проверок на существование. Мы теряем здесь типизацию при наборе базовой темы (исключительно этот файл), но даём пользователям удобство работы с константой. Пользовательские тему будут создаваться через createTheme и строго следовать типам. */

/**
 * Default GDS theme.
 */
const baseTheme = deepmerge(tokens, {
    global: {
        placeholder: PlaceholderIcon,
        fonts: {
            fontFace: {
                'PT Root UI': [
                    {
                        woff2: 'fonts/PTRootUI-Regular.woff2',
                        woff: 'fonts/PTRootUI-Regular.woff',
                    },
                    {
                        woff2: 'fonts/PTRootUI-Medium.woff2',
                        woff: 'fonts/PTRootUI-Medium.woff',
                        weight: 500,
                    },
                    {
                        woff2: 'fonts/PTRootUI-Bold.woff2',
                        woff: 'fonts/PTRootUI-Bold.woff',
                        weight: 700,
                    },
                    {
                        vf: 'fonts/PTRootUI-VF.woff2',
                        weight: '300 700',
                    },
                ],
            },
            stacks: {
                'PT Root UI': FONT_STACK,
            },
        },
        base: {
            selection: {
                color: colors.white,
                bg: colors.brand,
            },
            focus: {
                width: 2,
                color: colors.brand,
                offset: 2,
            },
            body: {
                typography: 'body',
                color: colors.black,
                bg: colors.white,
            },
        },
    },
    components: {
        Button: {
            base: {
                default: {
                    round: true,
                    half: true,
                },
            },
            themes: {
                primary: {
                    default: {
                        color: colors.white,
                        bg: colors.brand,
                    },
                    hover: {
                        bg: colors.brandHover,
                    },
                    active: {
                        border: 'transparent',
                        shadow: shadows.inner,
                    },
                    disabled: {
                        bg: colors.grey70,
                        color: colors.grey40,
                    },
                },
                secondary: {
                    default: {
                        color: colors.brand,
                        border: colors.brand,
                        bg: colors.white,
                    },
                    hover: {
                        color: colors.brandHover,
                        border: colors.brandHover,
                    },
                    active: {
                        bg: colors.grey90,
                        border: 'transparent',
                        shadow: shadows.inner,
                    },
                    disabled: {
                        border: colors.grey60,
                        color: colors.grey40,
                    },
                },
            },
            sizes: {
                lg: {
                    height: scale(8),
                    padding: scale(3),
                    iconSize: scale(4),
                    iconOffset: scale(1),
                    typography: 'buttonLg',
                },
                md: {
                    height: scale(6),
                    padding: scale(3),
                    iconSize: scale(3),
                    iconOffset: scale(1),
                    typography: 'buttonMd',
                },
                sm: {
                    height: scale(5),
                    padding: scale(2),
                    iconSize: scale(2),
                    iconOffset: scale(1),
                    typography: 'buttonSm',
                },
            },
        },
        Legend: {
            theme: {
                label: {
                    default: {
                        color: colors.black,
                        fill: colors.black,
                    },
                    hover: {
                        color: colors.black,
                        fill: colors.brand,
                    },
                    error: {
                        color: colors.error,
                        fill: colors.error,
                    },
                    success: {
                        color: colors.success,
                        fill: colors.black,
                    },
                },
                optional: {
                    default: {
                        color: colors.grey20,
                    },
                },
                mark: {
                    default: {
                        color: colors.error,
                    },
                },
            },
            sizes: {
                lg: {
                    padding: 0,
                    iconSize: scale(4),
                    iconOffset: scale(1),
                    typography: 'labelLg',
                },
                md: {
                    padding: 0,
                    iconSize: scale(3),
                    iconOffset: scale(1),
                    typography: 'labelMd',
                },
                sm: {
                    padding: 0,
                    iconSize: scale(2),
                    iconOffset: scale(1),
                    typography: 'labelSm',
                },
            },
        },
        Form: {
            errorIcon: {
                fill: colors.error,
            },
            successIcon: {
                fill: colors.success,
            },
        },
        FormHint: {
            theme: {
                color: colors.grey20,
            },
            sizes: {
                lg: {
                    topGap: scale(1),
                    typography: 'bodyLg',
                },
                md: {
                    topGap: scale(1),
                    typography: 'bodyMd',
                },
                sm: {
                    topGap: scale(1),
                    typography: 'bodySm',
                },
            },
        },
        FormInput: {
            base: {
                default: {
                    half: false,
                },
            },
            theme: {
                default: {
                    color: colors.black,
                    fill: colors.black,
                    border: colors.grey20,
                    bg: colors.white,
                    borderRadius: 4,
                },
                hover: {
                    border: colors.brand,
                    fill: colors.brand,
                },
                focus: {
                    border: colors.brand,
                    fill: colors.brand,
                    shadow: shadows.focus,
                },
                disabled: {
                    color: colors.grey20,
                    border: colors.grey70,
                    fill: colors.grey20,
                    bg: colors.grey70,
                },
                error: {
                    border: colors.error,
                },
                success: {
                    border: colors.success,
                },
            },
            sizes: {
                lg: {
                    height: scale(7),
                    padding: `0.5em ${scale(1)}px`,
                    iconSize: scale(4),
                    typography: 'bodyLg',
                },
                md: {
                    height: scale(5),
                    padding: `0.4em ${scale(1)}px`,
                    iconSize: scale(3),
                    typography: 'bodyMd',
                },
                sm: {
                    height: scale(3),
                    padding: `0.3em ${scale(1)}px`,
                    iconSize: scale(2),
                    typography: 'bodySm',
                },
            },
        },
        FormError: {
            theme: {
                color: colors.error,
            },
            sizes: {
                lg: {
                    topGap: scale(1),
                    typography: 'bodyLg',
                },
                md: {
                    topGap: scale(1),
                    typography: 'bodyMd',
                },
                sm: {
                    topGap: scale(1),
                    typography: 'bodySm',
                },
            },
        },
        RadioItem: {
            theme: {
                label: {
                    default: {
                        color: colors.black,
                    },
                    hover: {
                        color: colors.black,
                    },
                    focus: {
                        color: colors.black,
                    },
                    disabled: {
                        color: colors.black,
                    },
                    checked: {
                        color: colors.black,
                    },
                    error: {
                        color: colors.error,
                    },
                },
                outer: {
                    default: {
                        border: colors.black,
                    },
                    hover: {
                        border: colors.brand,
                    },
                    focus: {
                        border: colors.brand,
                        shadow: shadows.focus,
                    },
                    disabled: {
                        border: colors.grey60,
                        color: colors.grey60,
                    },
                    checked: {
                        border: colors.black,
                    },
                    error: {
                        border: colors.error,
                    },
                },
                inner: {
                    default: {
                        border: colors.black,
                        color: colors.black,
                        transform: 'scale(0)',
                    },
                    hover: {
                        border: colors.black,
                        color: colors.black,
                    },
                    focus: {
                        border: colors.black,
                        color: colors.black,
                        shadow: '0 0 3px rgba(100,0,0,0.9)',
                    },
                    disabled: {
                        border: colors.grey20,
                        color: colors.grey20,
                    },
                    checked: {
                        transform: 'scale(1)',
                    },
                },
            },
            sizes: {
                sm: {
                    paddingVertical: 0,
                    paddingHorizontal: 0,
                    outerSize: scale(2),
                    innerSize: scale(1),
                    outerOffset: scale(1),
                    horizontalGap: scale(2),
                    verticalGap: scale(1),
                    typography: 'labelSm',
                },
                md: {
                    paddingVertical: 0,
                    paddingHorizontal: 0,
                    outerSize: scale(3),
                    innerSize: scale(1),
                    outerOffset: scale(1),
                    horizontalGap: scale(3),
                    verticalGap: scale(2),
                    typography: 'labelMd',
                },
                lg: {
                    paddingVertical: 0,
                    paddingHorizontal: 0,
                    outerSize: scale(4),
                    innerSize: 11,
                    outerOffset: scale(1),
                    horizontalGap: scale(3),
                    verticalGap: scale(2),
                    typography: 'labelLg',
                },
            },
        },
    },
});

export default baseTheme;
