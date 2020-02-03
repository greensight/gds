import deepMerge from './deepMerge';

const createTheme = ({ tokens = {}, theme = {} }) => deepMerge(tokens, theme);

export default createTheme;
