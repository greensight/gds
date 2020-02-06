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

interface IPalettes {
    /** Набор цветов палитры */
    [name: string]: string[];
}

interface IColors {
    /** Переменная цвета */
    [name: string]: string;
}
interface ITypography {
    /** Брейкпоинты, соответствующие desktop и mobile */
    breakpoints: [number, number];
    /** Набор фолбеков под отдельные шрифты. Не токенизируется */
    stacks?: {
        /** Список фолбеков */
        [fontName: string]: string;
    };
    /** Флюидная типографика. Передайте false для отключения на всём проекте */
    fluid?: boolean;
    /** Стиль типографики */
    [name: string]: {
        /** Свойства десктопной вариации */
        desktop: ITypographyProperties;
        /** Свойства мобильной вариации */
        mobile?: ITypographyProperties;
        /** Флюидная типографика. Передайте false для отключения для этого стиля */
        fluid?: boolean;
    };
}

interface ITypographyProperties {
    /** Название */
    fontFamily: string;
    /** Начертание */
    fontWeight: number;
    /** Размер кегля (rem) */
    fontSize: string;
    /** Высота строки (множитель) */
    lineHeight: number;
    /** Межбуквенное расстояние (em) */
    letterSpacing?: string;
    /** Стиль */
    fontStyle?: 'italic';
    /** Регистры */
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    /** Подчёркивания */
    textDecoration?: 'underline' | 'line-through';
    /** Равноширинные цифры */
    fontVariantNumeric?: 'tabular-nums';
}

interface ILayout {
    /** Брейкпоинты проекта */
    breakpoints: {
        xxxl: number;
        xxl: number;
        xl: number;
        lg: number;
        md: number;
        sm: number;
        xs: number;
        xxs: number;
        xxxs: number;
    };
    /** Число колонок */
    cols: {
        [bp: Breakpoint]: number;
    };
    /** Отступы между колонок */
    gap: {
        [bp: Breakpoint]: number;
    };
    /** Поля */
    padding: {
        [bp: Breakpoint]: number;
    };
    /** Ширина контейнера. 'none' на точке отключения */
    container: {
        [bp: Breakpoint]: number | 'none';
    };
    /** Левый отступ контейнера. 0 на точке отключения */
    marginLeft: {
        [bp: Breakpoint]: 'auto' | number;
    };
    /** Правый отступ контейнера. 0 на точке отключения */
    marginRight: {
        [bp: Breakpoint]: 'auto' | number;
    };
}

type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';

interface IShadows {
    /** Переменная тени */
    [name: string]: string;
}

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
    /** Глобальные стили */
    global?: IGlobal;
    /** Палитры */
    palettes?: IPalettes;
    /** Цвета */
    colors?: IColors;
    /** Типографика */
    typography?: ITypography;
    /** Сетки */
    layout?: ILayout;
    /** Тени */
    shadows?: IShadows;
    /** Иконка-плейсхолдер */
    placeholder?: React.ReactNode;
    /** Настройки компонентов */
    components?: {
        /** Кнопка */
        Button: IButton;
    };
}

export default interface IThemeProvider {
    /** Объект темы */
    theme?: ITheme;
    /** Код с доступом к теме */
    children: React.ReactNode;
}
