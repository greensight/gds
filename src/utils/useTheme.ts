import { useTheme as useEmotionTheme } from 'emotion-theming';
import { ITheme } from '../index.d';

const useTheme = () => {
    const theme: ITheme = useEmotionTheme();
    return theme;
};

export default useTheme;
