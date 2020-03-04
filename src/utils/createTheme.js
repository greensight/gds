import deepMerge from '@helpers/deepMerge';

const createTheme = ({ tokens = {}, settings = {} }) => deepMerge(tokens, settings);

export default createTheme;
