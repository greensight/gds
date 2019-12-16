import deepMerge from './deepMerge';

const createTheme = ({ tokens = {}, theme = {} }) => {
    return {
        app: deepMerge(tokens, theme),
    };
};

export default createTheme;
