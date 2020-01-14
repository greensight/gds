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
    },
});

export default baseTheme;
