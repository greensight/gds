import { useContext, createContext } from 'react';
import { IAutokitsTheme } from '../../types/autokits/Theme';

export const ThemeContext = createContext<IAutokitsTheme | null>(null);

/**
 * Custom hook to get your theme object in React components from ThemeProvider.
 */
export const useAutokitsTheme = (): IAutokitsTheme => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(`Hook useScssTheme must be used within ScssThemeProvider`);
    }

    return context;
};
