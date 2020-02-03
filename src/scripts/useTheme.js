import { useTheme as useEmotionTheme } from 'emotion-theming';
import baseTheme from './baseTheme';

const useTheme = () => {
    const theme = useEmotionTheme();
    return Object.keys(theme).length ? theme : baseTheme;
};

export default useTheme;
