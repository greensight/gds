import tokens from '../../public/tokens';
import createTheme from './createTheme';

const baseTheme = createTheme({
    tokens,
    theme: {
        typography: {
            fonts: {
                'PT Root UI': {
                    vf: 'PT Root UI VF',
                    stack: 'sans-serif',
                },
            },
        },
        button: {
            borderWidth: 2,
            time: '300ms',
            disabled: {
                color: tokens.colors.text.default,
                bg: tokens.colors.bg.disabled,
                borderColor: tokens.colors.border.disabled,
            },
            variants: {
                default: {
                    color: tokens.colors.text.white,
                    colorActive: tokens.colors.text.default,
                    bg: tokens.colors.bg.inverse,
                    bgActive: tokens.colors.bg.default,
                    borderColor: tokens.colors.border.inverse,
                    borderColorActive: tokens.colors.border.inverse,
                },
                primary: {
                    color: tokens.colors.text.white,
                    colorActive: tokens.colors.text.white,
                    bg: tokens.colors.bg.brand,
                    bgActive: tokens.colors.bg.brandHover,
                    borderColor: tokens.colors.border.brand,
                    borderColorActive: tokens.colors.border.brand,
                },
                secondary: {
                    color: tokens.colors.text.white,
                    colorActive: tokens.colors.text.white,
                    bg: tokens.colors.bg.brandSecond,
                    bgActive: tokens.colors.bg.brandSecondHover,
                    borderColor: tokens.colors.border.default,
                    borderColorActive: tokens.colors.border.default,
                },
            },
            sizes: {
                medium: {
                    height: 48,
                    padding: 24,
                    fontSize: 16,
                },
                small: {
                    height: 32,
                    padding: 16,
                    fontSize: 14,
                },
            },
        },
    },
});

export default baseTheme;
