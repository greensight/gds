import { CSSObject } from '@emotion/core';
import { ComponentStates, RequireAtLeastOne } from './Utils';

export interface FormInputStateProperties {
    /** Цвет текста */
    color?: string;
    /** Цвет иконок */
    fill?: string;
    /** Цвет фона */
    bg?: string;
    /** Цвет обводки */
    border?: string;
    /** Тень */
    shadow?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormInputThemeProperties extends FormInputStateProperties {
    /** Толщина обводки. Проставляется автоматически, если передан border */
    borderWidth?: number;
    /** Стиль обводки */
    borderStyle?: string;
    /** Скругление Поля */
    borderRadius?: number | string;
    /** Время анимации ховера */
    time?: number;
    /** Время анимации перехода на ховер. Указывается, когда нужно разделить тайминги входа/выхода */
    timeIn?: number;
    /** Функция анимации */
    easing?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface FormInputThemeValidationProperties extends FormInputStateProperties {
    /** Правила для ошибки */
    error?: FormInputStateProperties;
    /** Правила для успеха  */
    success?: FormInputStateProperties;
}

export interface FormInputStates extends Partial<Record<ComponentStates, FormInputStateProperties>> {
    default: FormInputThemeProperties;
}

export interface FormInputSizeProperties {
    /** Height. Equals `scale(6)` by default. */
    height?: number;
    /** Horizontal paddings. Equals `scale(3)` by default. */
    padding?: number;
    /** Icon size. Equals `scale(3)` by default. */
    iconSize?: number;
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default.*/
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export default interface FormInputTheme {
    /** Common settings for all themes. */
    base?: FormInputStates;
    /** Available sizes. Any button can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, FormInputSizeProperties>, 'md'>;
}

export interface IFormLabelBaseRules {
    /** Цвет текста */
    color?: string;
    /** Цвет иконок */
    fill?: string;
    /** Время анимации ховера */
    time?: number;
    /** Время анимации перехода на ховер. Указывается, когда нужно разделить тайминги входа/выхода */
    timeIn?: number;
    /** Функция анимации */
    easing?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormLabelThemeRules extends IFormLabelBaseRules {
    /** Правила на ховер */
    hover?: IFormLabelRules;
}

export interface IFormLabelValidationRules extends IFormLabelBaseRules {
    /** Правила для ошибки */
    error?: IFormLabelRules;
    /** Правила для успеха  */
    success?: IFormLabelRules;
}

export interface IFormLabelSizeRules {
    /** Имя типографического стиля */
    typography?: string;
    /** Размер иконки */
    iconSize?: number;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormLabelOptionalRules {
    /** Цвет опционального текста */
    color?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormLabelMarkRules {
    /** Цвет астериска */
    color?: string;
    /** Кастомный CSS */
    css?: Object;
}
export interface IFormLabel {
    /** Глобальные стили. Распространяются на все лейблы */
    base?: IFormLabelBaseRules;
    /** Стили размеров */
    sizes: {
        /** Дефолтный размер */
        md: IFormLabelBaseRules;
        /** Можно добавлять свои размеры */
        [size: string]: IFormLabelBaseRules;
    };
    /** Стили опционального текста */
    optional?: IFormLabelOptionalRules;
    /** Стили астерисков */
    mark?: IFormLabelMarkRules;
}

export interface IFormHintBaseRules {
    /** Цвет текста */
    color?: string;
    /** Цвет фона */
    bg?: string;
    /** Цвет обводки */
    border?: string;
    /** Толщина обводки. Проставляется автоматически, если передан border */
    borderWidth?: number;
    /** Стиль обводки */
    borderStyle?: string;
    /** Скругление */
    borderRadius?: number | string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormHintSizeRules {
    /** Имя типографического стиля */
    typography?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormHint {
    /** Глобальные стили. Распространяются на все хинты */
    base?: IFormHintBaseRules;
    /** Стили размеров */
    sizes: {
        /** Дефолтный размер */
        md: IFormHintSizeRules;
        /** Можно добавлять свои размеры */
        [size: string]: IFormHintSizeRules;
    };
}

export interface IFormErrorBaseRules {
    /** Цвет текста */
    color?: string;
    /** Цвет фона */
    bg?: string;
    /** Цвет обводки */
    border?: string;
    /** Толщина обводки. Проставляется автоматически, если передан border */
    borderWidth?: number;
    /** Стиль обводки */
    borderStyle?: string;
    /** Скругление */
    borderRadius?: number | string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormErrorSizeRules {
    /** Имя типографического стиля */
    typography?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface IFormError {
    /** Глобальные стили. Распространяются на все ошибки */
    base?: IFormErrorBaseRules;
    /** Стили размеров */
    sizes: {
        /** Дефолтный размер */
        md: IFormErrorSizeRules;
        /** Можно добавлять свои размеры */
        [size: string]: IFormErrorSizeRules;
    };
}

export interface FormTheme {}
