import { useTheme as useEmotionTheme } from 'emotion-theming';
import baseTheme from '../helpers/baseTheme';

const useTheme = () => {
    const theme = useEmotionTheme();
    return Object.keys(theme).length ? theme : baseTheme;
};

export default useTheme;
