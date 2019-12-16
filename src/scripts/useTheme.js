import { useTheme } from 'emotion-theming';

const useThemeCustom = () => {
    const theme = useTheme();
    return theme.app;
};

export default useThemeCustom;
