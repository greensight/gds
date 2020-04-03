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

export interface FormInputTheme {
    /** Common settings for all themes. */
    base: FormInputStates;
    /** Available sizes. Any input can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, FormInputSizeProperties>, 'md'>;
}

export interface FormLabelStateProperties {
    /** Цвет текста */
    color?: string;
    /** Цвет иконок */
    fill?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormLabelThemeProperties extends FormLabelStateProperties {
    /** Время анимации ховера */
    time?: number;
    /** Время анимации перехода на ховер. Указывается, когда нужно разделить тайминги входа/выхода */
    timeIn?: number;
    /** Функция анимации */
    easing?: string;
}

export interface FormLabelThemeValidationProperties extends FormLabelStateProperties {
    /** Правила для ошибки */
    error?: FormLabelStateProperties;
    /** Правила для успеха  */
    success?: FormLabelStateProperties;
}

export interface FormLabelStates extends Partial<Record<ComponentStates, FormLabelStateProperties>> {
    default: FormLabelThemeProperties;
}

export interface FormLabelSizeProperties {
    /** Имя типографического стиля */
    typography?: string;
    /** Размер иконки */
    iconSize?: number;
    /** Кастомный CSS */
    css?: Object;
}

export interface FormLabelOptionalRules {
    /** Цвет опционального текста */
    color?: string;
    /** Кастомный CSS */
    css?: Object;
}

export interface FormLabelMarkRules {
    /** Цвет астериска */
    color?: string;
    /** Кастомный CSS */
    css?: Object;
}
export interface FormLabelTheme {
    /** Base rules. */
    base: FormLabelStates;
    /** Available sizes. Any label can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, FormLabelSizeProperties>, 'md'>;
    /** Rules for optional text. */
    optional?: FormLabelOptionalRules;
    /** Rules for asterisk. */
    mark?: FormLabelMarkRules;
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

export interface FormErrorThemeProperties {
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
    /** Скругление Поля */
    borderRadius?: number | string;
    /** Тень */
    shadow?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormErrorSizeProperties {
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default.*/
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormErrorTheme {
    /** Common settings for all themes. */
    base?: FormErrorThemeProperties;
    /** Available sizes. Any error can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, FormErrorSizeProperties>, 'md'>;
}

export default interface FormTheme {}
