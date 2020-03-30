import PlaceholderIcon from '@icons/tokens/medium/placeholder.svg';
import ErrorIcon from '@icons/tokens/medium/errorTriangle.svg';
import SuccessIcon from '@icons/tokens/medium/checkCircle.svg';
import createTheme from '@utils/createTheme';
import scale from '@utils/scale';
import { FONT_STACK } from '@helpers/constants';
import tokens from '../../public/tokens';

const { colors, shadows } = tokens;

const baseTheme = createTheme({
    tokens,
    settings: {
        global: {
            fonts: {
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
                    typography: 'bodyMd',
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
        error: ErrorIcon,
        success: SuccessIcon,
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
            Form: {
                errorIcon: {
                    fill: colors.error,
                },
                successIcon: {
                    fill: colors.success,
                },
                Input: {
                    base: {
                        color: colors.black,
                        fill: colors.black,
                        border: colors.grey20,
                        bg: colors.white,
                        borderRadius: 4,
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
                            padding: scale(1),
                            iconSize: scale(4),
                            typography: 'bodyLg',
                        },
                        md: {
                            height: scale(5),
                            padding: scale(1),
                            iconSize: scale(3),
                            typography: 'bodyMd',
                        },
                        sm: {
                            height: scale(3),
                            padding: scale(1),
                            iconSize: scale(2),
                            typography: 'bodySm',
                        },
                    },
                },
                Label: {
                    base: {
                        color: colors.black,
                        fill: colors.black,
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
                    sizes: {
                        lg: {
                            iconSize: scale(4),
                            typography: 'labelLg',
                        },
                        md: {
                            iconSize: scale(3),
                            typography: 'labelMd',
                        },
                        sm: {
                            iconSize: scale(2),
                            typography: 'labelSm',
                        },
                    },
                    optional: {
                        color: colors.grey20,
                    },
                    mark: {
                        color: colors.error,
                    },
                },
                Hint: {
                    base: {
                        bg: 'transparent',
                        color: colors.grey20,
                    },
                    sizes: {
                        lg: {
                            typography: 'bodyLg',
                        },
                        md: {
                            typography: 'bodyMd',
                        },
                        sm: {
                            typography: 'bodySm',
                        },
                    },
                },
                Error: {
                    base: {
                        bg: 'transparent',
                        color: colors.error,
                    },
                    sizes: {
                        lg: {
                            typography: 'bodyLg',
                        },
                        md: {
                            typography: 'bodyMd',
                        },
                        sm: {
                            typography: 'bodySm',
                        },
                    },
                },
            },
        },
    },
});

export default baseTheme;
