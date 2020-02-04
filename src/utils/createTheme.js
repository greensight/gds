import deepMerge from '../helpers/deepMerge';

const createTheme = ({ tokens = {}, theme = {} }) => deepMerge(tokens, theme);

export default createTheme;
