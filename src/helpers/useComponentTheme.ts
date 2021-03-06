import useTheme from '../utils/useTheme';
import baseTheme from '../utils/baseTheme';
import Theme, { ComponentsTheme } from '../types/Theme';

/**
 * Custom hook returns used component and project themes based on custom theme exist check. Use it for all components defined in `ComponentsTheme`.
 */
const useComponentTheme = (name: keyof ComponentsTheme, __theme?: ComponentsTheme[keyof ComponentsTheme]) => {
    let componentTheme: ComponentsTheme[keyof ComponentsTheme];
    let usedTheme: Theme;
    const userTheme = useTheme();
    if (userTheme.components && userTheme.components[name]) {
        usedTheme = userTheme;
        componentTheme = userTheme.components[name];
    } else {
        usedTheme = baseTheme as Theme;
        componentTheme = baseTheme.components[name];
    }
    componentTheme = __theme || componentTheme;

    return { componentTheme, usedTheme };
};

export default useComponentTheme;
