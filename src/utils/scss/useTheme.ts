import { useContext, createContext } from 'react';

import { ITheme } from '../../types/scss/Theme';

export const ThemeContext = createContext<ITheme | null>(null);

/**
 * Custom hook to get your theme object in React components from ThemeProvider.
 */
export const useScssTheme = (): ITheme => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(`Hook useScssTheme must be used within ScssThemeProvider`);
    }

    return context;
};
