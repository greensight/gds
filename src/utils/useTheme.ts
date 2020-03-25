import { useTheme as useEmotionTheme } from 'emotion-theming';
import Theme from '../typings/Theme.d';

/**
 * Custom hook to get your theme object in React components from ThemeProvider.
 */
const useTheme = () => {
    const theme: Theme = useEmotionTheme();
    return theme;
};

export default useTheme;
