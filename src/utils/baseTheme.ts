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
            families: {
                'PT Root UI': {
                    stack: FONT_STACK,
                },
            },
            fontFace: [
                {
                    '@font-face': {
                        fontFamily: 'PT Root UI',
                        src:
                            'url("../fonts/PTRootUI/PTRootUI-Regular.woff2") format("woff2"), url("../fonts/PTRootUI/PTRootUI-Regular.woff") format("woff")',
                        fontDisplay: 'swap',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PT Root UI',
                        src:
                            'url("../fonts/PTRootUI/PTRootUI-Medium.woff2") format("woff2"), url("../fonts/PTRootUI/PTRootUI-Medium.woff") format("woff")',
                        fontDisplay: 'swap',
                        fontWeight: 500,
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PT Root UI',
                        src:
                            'url("../fonts/PTRootUI/PTRootUI-Bold.woff2") format("woff2"), url("../fonts/PTRootUI/PTRootUI-Bold.woff") format("woff")',
                        fontDisplay: 'swap',
                        fontWeight: 700,
                    },
                },
            ],
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
    },
});

export default baseTheme;
