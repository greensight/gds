import Theme from '../types/Theme';
/**
 * Custom hook returns used component and project themes based on custom theme exist check. Use it for all components defined in `ComponentsTheme`.
 */
declare const useComponentTheme: (name: "Button", __theme?: import("../types/Button").default | undefined) => {
    componentTheme: import("../types/Button").default | undefined;
    usedTheme: Theme;
};
export default useComponentTheme;
