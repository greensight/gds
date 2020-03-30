import Theme from '../types/Theme';
/**
 * Helper for creating custom theme. Makes deep merge of tokens and theme settings.
 */
declare const createTheme: ({ tokens, settings }: {
    tokens?: any;
    settings?: Theme | undefined;
}) => Theme;
export default createTheme;
