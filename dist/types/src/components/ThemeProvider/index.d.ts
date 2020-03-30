import React from 'react';
import 'focus-visible';
import 'normalize.css';
import baseTheme from '../../utils/baseTheme';
import Theme from '../../types/Theme';
export interface ThemeProviderProps {
    /** Theme object. */
    theme: Theme | typeof baseTheme;
    /** Project code with access to provided theme. */
    children: React.ReactNode;
}
declare const ThemeProvider: ({ theme, children }: ThemeProviderProps) => JSX.Element;
export default ThemeProvider;
