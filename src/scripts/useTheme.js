import { useTheme as useEmotionTheme } from 'emotion-theming';
import baseTheme from './baseTheme';

const useTheme = () => {
    const theme = useEmotionTheme();
    console.log('useTheme', theme, baseTheme);
    return Object.keys(theme).length ? theme.app : baseTheme.app;
};

export default useTheme;
