// eslint-disable-next-line import/no-unresolved
import tokens from '../../public/tokens';

const baseTheme = {
    ...tokens,
    breakpoints: [32, 48, 64],
    space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    step: 8,
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
    time: '300ms',
};

const theme = {
    ...baseTheme,
    button: {
        borderWidth: 2,
        time: baseTheme.time,
        disabled: {
            color: 'white',
            bg: baseTheme.palettes.gray[14],
            borderColor: baseTheme.palettes.gray[12],
        },
        variants: {
            default: {
                color: 'white',
                colorActive: 'black',
                bg: 'black',
                bgActive: 'white',
                borderColor: 'black',
                borderColorActive: 'black',
            },
            primary: {
                color: 'white',
                colorActive: 'white',
                bg: baseTheme.palettes.blue[7],
                bgActive: baseTheme.palettes.blue[6],
                borderColor: baseTheme.palettes.blue[7],
                borderColorActive: baseTheme.palettes.blue[6],
            },
            secondary: {
                color: 'white',
                colorActive: 'white',
                bg: baseTheme.palettes.red[8],
                bgActive: baseTheme.palettes.red[7],
                borderColor: baseTheme.palettes.red[8],
                borderColorActive: baseTheme.palettes.red[7],
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

export default theme;
