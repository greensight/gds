import tokens from '../../public/tokens';
import PlaceholderIcon from '../images/icons/tokens/medium/placeholder.svg';
import createTheme from './createTheme';
import major from './major';
import PTRootUIRegularWoff2 from '../fonts/PTRootUI/PTRootUI-Regular.woff2';
import PTRootUIRegularWoff from '../fonts/PTRootUI/PTRootUI-Regular.woff';
import PTRootUIBoldWoff2 from '../fonts/PTRootUI/PTRootUI-Regular.woff2';
import PTRootUIBoldWoff from '../fonts/PTRootUI/PTRootUI-Regular.woff';
import PTRootUIMediumWoff2 from '../fonts/PTRootUI/PTRootUI-Medium.woff2';
import PTRootUIMediumWoff from '../fonts/PTRootUI/PTRootUI-Medium.woff';
import PTRootUIVF from '../fonts/PTRootUI/PTRootUI-VF.woff2';

const { colors } = tokens;

const baseTheme = createTheme({
    tokens,
    theme: {
        global: {
            fonts: {
                'PT Root UI': [
                    {
                        woff2: PTRootUIRegularWoff2,
                        woff: PTRootUIRegularWoff,
                    },
                    {
                        woff2: PTRootUIMediumWoff2,
                        woff: PTRootUIMediumWoff,
                        weight: 500,
                    },
                    {
                        woff2: PTRootUIBoldWoff2,
                        woff: PTRootUIBoldWoff,
                        weight: 700,
                    },
                    {
                        vf: PTRootUIVF,
                        weight: '300 700',
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
                    bg: colors.black,
                },
            },
        },
        typography: {
            fonts: {
                'PT Root UI': {
                    vf: 'PT Root UI VF',
                    stack: 'sans-serif',
                },
            },
        },
        placeholder: PlaceholderIcon,
        components: {
            Button: {
                sizes: {
                    lg: {
                        height: major(8),
                        padding: major(3),
                        iconSize: major(4),
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
                        iconSize: major(2),
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
                        active: {
                            border: 'transparent',
                            shadow:
                                'inset 0px 3px 2px rgba(0, 0, 0, 0.1), inset 0px 5px 5px rgba(0, 0, 0, 0.1), inset 0px 1px 1px rgba(0, 0, 0, 0.2)',
                        },
                        disabled: {
                            bg: colors.grey70,
                            color: colors.grey40,
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
                        active: {
                            bg: colors.grey90,
                            border: 'transparent',
                            shadow:
                                'inset 0px 3px 2px rgba(0, 0, 0, 0.1), inset 0px 5px 5px rgba(0, 0, 0, 0.1), inset 0px 1px 1px rgba(0, 0, 0, 0.2)',
                        },
                        disabled: {
                            border: colors.grey60,
                            color: colors.grey40,
                        },
                    },
                },
            },
        },
    },
});

export default baseTheme;
