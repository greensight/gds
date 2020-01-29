import tokens from '../../public/tokens';
import PlaceholderIcon from '../images/icons/tokens/medium/placeholder.svg';
import createTheme from './createTheme';
import scale from './scale';
import { FONT_STACK } from './constants';

const { colors, shadows } = tokens;

const baseTheme = createTheme({
    tokens,
    theme: {
        global: {
            fonts: {
                'PT Root UI': [
                    {
                        woff2: 'PTRootUI-Regular.woff2',
                        woff: 'PTRootUI-Regular.woff',
                    },
                    {
                        woff2: 'PTRootUI-Medium.woff2',
                        woff: 'PTRootUI-Medium.woff',
                        weight: 500,
                    },
                    {
                        woff2: 'PTRootUI-Bold.woff2',
                        woff: 'PTRootUI-Bold.woff',
                        weight: 700,
                    },
                    {
                        vf: 'PTRootUI-VF.woff2',
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
                    bg: colors.white,
                },
            },
        },
        typography: {
            stacks: {
                'PT Root UI': FONT_STACK,
            },
        },
        placeholder: PlaceholderIcon,
        components: {
            Button: {
                base: {
                    round: true,
                    half: true,
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
                themes: {
                    primary: {
                        color: colors.white,
                        bg: colors.brand,
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
                            shadow: shadows.inner,
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
