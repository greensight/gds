// eslint-disable-next-line import/no-unresolved
import tokens from '../../public/tokens';

const palettes = {
    ...tokens.palettes,
    black: '#000',
    white: '#fff',
};

const colors = {
    ...tokens.colors,
};

const theme = {
    palettes,
    colors,
    button: {
        borderWidth: 2,
        time: '300ms',
        disabled: {
            color: 'white',
            bg: palettes.gray[14],
            borderColor: palettes.gray[12],
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
                bg: palettes.blue[7],
                bgActive: palettes.blue[6],
                borderColor: palettes.blue[7],
                borderColorActive: palettes.blue[6],
            },
            secondary: {
                color: 'white',
                colorActive: 'white',
                bg: palettes.red[8],
                bgActive: palettes.red[7],
                borderColor: palettes.red[8],
                borderColorActive: palettes.red[7],
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
};

export default theme;
