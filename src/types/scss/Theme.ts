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

export interface ITheme {
    /** Components theme styles */
    styles: IComponentsTheme;
}
