import deepMerge from './deepMerge';

const createTheme = ({ tokens = {}, theme = {} }) => ({
    app: deepMerge(tokens, theme),
});

export default createTheme;
