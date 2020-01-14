import tokens from '../../public/tokens';
import createTheme from './createTheme';
import major from './major';

const { colors } = tokens;

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
            global: {
                borderRadius: 3,
                ':focus': {
                    outlineOffset: 2,
                    outlineColor: colors.brand,
                },
            },
            sizes: {
                lg: {
                    pt: 16,
                    pb: 18,
                    ph: major(3),
                    iconOffset: major(1),
                    typography: 'buttonLg',
                },
                md: {
                    pt: 11,
                    pb: 13,
                    ph: major(3),
                    iconOffset: major(1),
                    typography: 'buttonMd',
                },
                sm: {
                    pt: 10,
                    pb: 9,
                    ph: major(2),
                    iconOffset: major(1),
                    typography: 'buttonSm',
                },
            },
            themes: {
                primary: {
                    color: colors.white,
                    bg: colors.brand,
                    hover: {
                        bg: colors.brandHover,
                    },
                    disabled: {
                        bg: colors.lighter,
                        color: colors.grey,
                    },
                },
                secondary: {
                    color: colors.brand,
                    border: colors.brand,
                    bg: colors.white,
                    hover: {
                        color: colors.brandHover,
                        border: colors.brandHover,
                    },
                    disabled: {
                        border: colors.light,
                        color: colors.grey,
                    },
                },
            },
        },
    },
});

export default baseTheme;
