interface IGlobalFontFamily {
    /** Путь до ассета шрифта (формат woff2) */
    woff2?: string;
    /** Путь до ассета шрифта (формат woff) */
    woff?: string;
    /** Путь до ассета шрифта (формат woff2) */
    vf?: string;
    /** Толщина шрифта */
    weight?: number | string;
    /** Курсивное начертание */
    italic?: boolean;
    /** Кастомный CSS */
    css?: Object;
}

interface IGlobalFonts {
    /** Список семейств шрифтов */
    [fontFamily: string]: IGlobalFontFamily[];
}

interface IGlobalBase {
    /** Стили выделения */
    selection?: {
        /** Цвет текста */
        color?: string;
        /** Цвет фона */
        bg?: string;
        /** Кастомный CSS */
        css?: object;
    };
    /** Стили фокуса */
    focus?: {
        /** Толщина линии обводки */
        width?: number;
        /** Цвет обводки */
        color?: string;
        /** Отступ между обводкой и элементов */
        offset?: number;
        /** Кастомный CSS */
        css?: object;
    };
    /** Стили body */
    body: {
        /** Типографический стиль */
        typography: string;
        /** Цвет текста */
        color?: string;
        /** Цвет фона */
        bg: string;
        /** Кастомный CSS */
        css: object;
    };
}

interface IGlobal {
    /** Подключения шрифтов */
    fonts?: IGlobalFonts;
    /** Базовые стили */
    base?: IGlobalBase;
    /** Кастомный CSS */
    css?: object;
}

interface ITypography {}

interface IButtonRules {
    /** Цвет текста и иконки */
    color?: string;
    /** Цвет фона */
    bg?: string;
    /** Цвет обводки */
    border?: string;
    /** Тень. Прежде всего для активного стейта */
    shadow?: string;
    /** Высота кнопки */
    height?: number;
    /** Горизонтальные поля */
    padding?: number;
    /** Размер иконки */
    iconSize?: number;
    /** Отступ от иконки */
    iconOffset?: number;
    /** Имя типографического стиля */
    typography?: string;
    /** Толщина обводки. Проставляется автоматически, если передан border */
    borderWidth?: number;
    /** Стиль обводки */
    borderStyle?: string;
    /** Скругление кнопки */
    borderRadius?: number | string;
    /** Режим половинчатого скругления. border-radius в половину высоты */
    half?: boolean;
    /** Режим полного скругления. border-radius в 50% для hidden режима */
    round?: boolean;
    /** Время анимации ховера */
    time?: number;
    /** Время анимации перехода на ховер. Указывается, когда нужно разделить тайминги входа/выхода */
    timeIn?: number;
    /** Функция анимации */
    easing?: string;
    /** Кастомный CSS */
    css?: Object;
}

interface IButtonThemeRules extends IButtonRules {
    /** Правила на ховер */
    hover: IButtonRules;
    /** Правила на клик */
    active: IButtonRules;
    /** Правила на блокирование */
    disabled: IButtonRules;
    /** Правила на фокус */
    focus: IButtonRules;
}

interface IButton {
    /** Глобальные стили. Распространяются на все кнопки */
    base?: IButtonRules;
    /** Стили размеров */
    sizes: {
        /** Дефолтный размер */
        md: IButtonRules;
        /** Можно добавлять свои размеры */
        [size: string]: IButtonRules;
    };
    /** Стили тем */
    themes: {
        /** Дефолтная тема */
        primary: IButtonThemeRules;
        /** Можно добавлять свои темы */
        [theme: string]: IButtonThemeRules;
    };
}

interface ITheme {
    /** Глобальные стили (встроены в ThemeProvider) */
    global?: IGlobal;
    /** Настройки типографики (влияют на работу хелпера typography) */
    typography?: ITypography;
    /** Иконка-плейсхолдер (используется в автокитах) */
    placeholder?: React.ReactNode;
    /** Настройки компонентов */
    components?: {
        /** Кнопка */
        Button: IButton;
    };
}

export default interface IThemeProvider {
    /** Объект темы */
    theme: ITheme;
    /** Код с доступом к теме */
    children: React.ReactNode;
}
