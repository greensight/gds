import { useTheme as useEmotionTheme } from 'emotion-theming';

const useTheme = () => {
    const theme = useEmotionTheme();
    return theme;
};

export default useTheme;
