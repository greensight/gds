const baseTheme = {
    breakpoints: [32, 48, 64],
    space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    lineHeights: {
        solid: 1,
        title: 1.25,
        copy: 1.5,
    },
    letterSpacings: {
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.05em',
        mega: '0.25em',
    },
    fonts: {
        serif: 'athelas, georgia, times, serif',
        sansSerif:
            '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    },
    borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
    radii: [0, 2, 4, 16, 9999, '100%'],
    width: [16, 32, 64, 128, 256],
    heights: [16, 32, 64, 128, 256],
    maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
    colors: {
        black: '#000',
        white: '#fff',
        grey: ' #696969',
        greyLg: '#ccc',
        blue: '#215bf0',
        blueDk: '#0f41c4',
        red: '#ea1414',
        redDk: '#c30c0c',
    },
    time: '300ms',
};

export default {
    ...baseTheme,
    button: {
        borderWidth: 2,
        time: baseTheme.time,
        disabled: {
            color: baseTheme.colors.white,
            bg: baseTheme.colors.grey,
            borderColor: baseTheme.colors.grey,
        },
        variants: {
            default: {
                color: baseTheme.colors.white,
                colorActive: baseTheme.colors.black,
                bg: baseTheme.colors.black,
                bgActive: baseTheme.colors.white,
                borderColor: baseTheme.colors.black,
                borderColorActive: baseTheme.colors.black,
            },
            primary: {
                color: baseTheme.colors.white,
                colorActive: baseTheme.colors.white,
                bg: baseTheme.colors.blue,
                bgActive: baseTheme.colors.blueDk,
                borderColor: baseTheme.colors.blue,
                borderColorActive: baseTheme.colors.blueDk,
            },
            secondary: {
                color: baseTheme.colors.white,
                colorActive: baseTheme.colors.white,
                bg: baseTheme.colors.blue,
                bgActive: baseTheme.colors.redDk,
                borderColor: baseTheme.colors.red,
                borderColorActive: baseTheme.colors.redDk,
            },
        },
        sizes: {
            medium: {
                height: baseTheme.space[6],
                padding: baseTheme.space[3],
                fontSize: baseTheme.fontSizes[1],
            },
            small: {
                height: baseTheme.space[4],
                padding: baseTheme.space[2],
                fontSize: baseTheme.fontSizes[0],
            },
        },
    },
};
