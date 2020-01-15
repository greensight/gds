import tokens from '../../public/tokens';
import createTheme from './createTheme';
import major from './major';
import minor from './minor';

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
                ':focus': {
                    outlineOffset: 2,
                    outlineColor: colors.brand,
                },
            },
            sizes: {
                lg: {
                    height: major(8),
                    padding: major(3),
                    iconSize: minor(9),
                    iconOffset: major(1),
                    typography: 'buttonLg',
                    borderRadius: 32,
                },
                md: {
                    height: major(6),
                    padding: major(3),
                    iconSize: major(3),
                    iconOffset: major(1),
                    typography: 'buttonMd',
                    borderRadius: 24,
                },
                sm: {
                    height: major(5),
                    padding: major(2),
                    iconSize: minor(3),
                    iconOffset: major(1),
                    typography: 'buttonSm',
                    borderRadius: 24,
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
                link: {
                    color: colors.brand,
                    hover: {
                        color: colors.brandHover,
                    },
                    disabled: {
                        color: colors.grey,
                    },
                },
                subtle: {
                    color: colors.brand,
                    hover: {
                        bg: colors.lightest,
                    },
                    disabled: {
                        color: colors.grey,
                    },
                },
            },
        },
    },
});

export default baseTheme;
