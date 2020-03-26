import deepmerge from 'deepmerge';
import Theme from '@typings/Theme';

/**
 * Helper for creating custom theme. Makes deep merge of tokens and theme settings.
 */
const createTheme = ({ tokens = {}, settings = {} }: { tokens?: any; settings?: Theme }): Theme =>
    deepmerge(tokens, settings);

export default createTheme;
