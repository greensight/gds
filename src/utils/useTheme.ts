import { useTheme as useEmotionTheme } from 'emotion-theming';
import Theme from '../typings/Theme.d';

const useTheme = () => {
    const theme: Theme = useEmotionTheme();
    return theme;
};

export default useTheme;
