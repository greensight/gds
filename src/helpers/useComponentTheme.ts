import { useMemo } from 'react';

import { ComponentsTheme, Theme } from '../types/Theme';
import { baseTheme } from '../utils/baseTheme';
import { useTheme } from '../utils/useTheme';

/**
 * Custom hook returns used component and project themes based on custom theme exist check. Use it for all components defined in `ComponentsTheme`.
 */
export const useComponentTheme = (name: keyof ComponentsTheme, __theme?: ComponentsTheme[keyof ComponentsTheme]) => {
    const userTheme = useTheme();

    return useMemo(() => {
        let componentTheme: ComponentsTheme[keyof ComponentsTheme];
        let usedTheme: Theme;
        if (userTheme.components && userTheme.components[name]) {
            usedTheme = userTheme;
            componentTheme = userTheme.components[name];
        } else {
            usedTheme = baseTheme as Theme;
            componentTheme = baseTheme.components[name];
        }
        componentTheme = __theme || componentTheme;

        return { componentTheme, usedTheme };
    }, [__theme, name, userTheme]);
};
