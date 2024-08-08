export interface IComponentsTheme {
    gridLayout: {
        index: CSSModuleClasses;
        item: CSSModuleClasses;
    };
    flexLayout: {
        index: CSSModuleClasses;
        item: CSSModuleClasses;
    };
    container: CSSModuleClasses;
}

export interface ITheme<T> {
    /** Components theme styles */
    components: IComponentsTheme;
    typography: T;
}
