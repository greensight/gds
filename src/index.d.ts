export { CSSObject } from '@emotion/core';

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
    css?: CSSObject;
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
        css?: CSSObject;
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
        css?: CSSObject;
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
        css: CSSObject;
    };
}

interface IGlobal {
    /** Подключения шрифтов */
    fonts?: IGlobalFonts;
    /** Базовые стили */
    base?: IGlobalBase;
    /** Кастомный CSS */
    css?: CSSObject;
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
    cols: Record<Breakpoint, number>;
    /** Отступы между колонок */
    gap: Record<Breakpoint, number>;
    /** Поля */
    padding: Record<Breakpoint, number>;
    /** Ширина контейнера. 'none' на точке отключения */
    container: Record<Breakpoint, number | 'none'>;
    /** Левый отступ контейнера. 0 на точке отключения */
    marginLeft: Record<Breakpoint, number | 'auto'>;
    /** Правый отступ контейнера. 0 на точке отключения */
    marginRight: Record<Breakpoint, number | 'auto'>;
}

type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';

interface IShadows {
    /** Переменная тени */
    [name: string]: string;
}

interface IButtonBaseRules {
    /** Цвет текста и иконки */
    color?: string;
    /** Цвет фона */
    bg?: string;
    /** Цвет обводки */
    border?: string;
    /** Тень. Прежде всего для активного стейта */
    shadow?: string;
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
    css?: CSSObject;
}

interface IButtonThemeRules extends IButtonBaseRules {
    /** Правила на ховер */
    hover?: IButtonBaseRules;
    /** Правила на клик */
    active?: IButtonBaseRules;
    /** Правила на блокирование */
    disabled?: IButtonBaseRules;
    /** Правила на фокус */
    focus?: IButtonBaseRules;
}

interface IButtonSizeRules {
    /** Высота кнопки */
    height?: number;
    /** Горизонтальные поля */
    padding?: number;
    /** Имя типографического стиля */
    typography?: string;
    /** Размер иконки */
    iconSize?: number;
    /** Отступ от иконки */
    iconOffset?: number;
    /** Кастомный CSS */
    css?: CSSObject;
}

export interface IButtonTheme {
    /** Глобальные стили. Распространяются на все кнопки */
    base?: IButtonBaseRules;
    /** Стили тем */
    themes: {
        /** Дефолтная тема */
        primary: IButtonThemeRules;
        /** Можно добавлять свои темы */
        [theme: string]: IButtonThemeRules;
    };
    /** Стили размеров */
    sizes: {
        /** Дефолтный размер */
        md: IButtonSizeRules;
        /** Можно добавлять свои размеры */
        [size: string]: IButtonSizeRules;
    };
}

export interface ITokens {
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
}

export interface ITheme extends ITokens {
    /** Глобальные стили */
    global?: IGlobal;
    /** Иконка-плейсхолдер */
    placeholder?: ISvg;
    /** Настройки компонентов */
    components?: {
        /** Кнопка */
        Button: IButtonTheme;
    };
}
