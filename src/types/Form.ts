import { CSSObject } from '@emotion/core';
import { ComponentStates, RequireAtLeastOne } from './Utils';

export interface FormInputStateProperties {
    /** Text color. */
    color?: string;
    /** Icon color. */
    fill?: string;
    /** Background color. */
    bg?: string;
    /** Border color. */
    border?: string;
    /** Shadow. */
    shadow?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormInputThemeProperties extends FormInputStateProperties {
    /** Border width. Equals `1` by default if `border` property is defined. */
    borderWidth?: number;
    /** Border style. `'solid'` by default. */
    borderStyle?: string;
    /** Border radius. */
    borderRadius?: number | string;
    /** Transition duration. Equals `200` by default. */
    time?: number;
    /** Transition enter duration for hover state. Uses with `time` property to differ enter/exit transition durations. */
    timeIn?: number;
    /** Transition easing function. Equals `'ease'` by default. */
    easing?: string;
}

export interface FormInputStates extends Partial<Record<ComponentStates, FormInputStateProperties>> {
    default: FormInputThemeProperties;
    error?: FormInputStateProperties;
    success?: FormInputStateProperties;
}

export interface FormInputSizeProperties {
    /** Height. Equals `scale(5)` by default. */
    height?: number;
    /** Horizontal paddings. Equals `scale(1)` by default. */
    padding?: number;
    /** Icon size. Equals `scale(3)` by default. */
    iconSize?: number;
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default. */
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
    /** Text color. */
    color?: string;
    /** Icon color. */
    fill?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormLabelThemeProperties extends FormLabelStateProperties {
    /** Transition duration. Equals `200` by default. */
    time?: number;
    /** Transition enter duration for hover state. Uses with `time` property to differ enter/exit transition durations. */
    timeIn?: number;
    /** Transition easing function. Equals `'ease'` by default. */
    easing?: string;
}

export interface FormLabelStates extends Partial<Record<ComponentStates, FormLabelStateProperties>> {
    default: FormLabelThemeProperties;
    error?: FormLabelStateProperties;
    success?: FormLabelStateProperties;
}

export interface FormLabelSizeProperties {
    /** Typography style. Can be omitted if `fontSize`, `fontWeight` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'`, `700` and `1` by default. */
    typography?: string;
    /** Icon size. Equals `scale(3)` by default. */
    iconSize?: number;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormLabelOptionalProperties {
    /** Text color. */
    color?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormLabelMarkProperties {
    /** Asterisk color. */
    color?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormLabelTheme {
    /** Base rules. */
    base: FormLabelStates;
    /** Available sizes. Any label can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, FormLabelSizeProperties>, 'md'>;
    /** Rules for optional text. */
    optional?: FormLabelOptionalProperties;
    /** Rules for asterisk. */
    mark?: FormLabelMarkProperties;
}

export interface FormHintThemeProperties {
    /** Text color. */
    color?: string;
    /** Background color. */
    bg?: string;
    /** Border color. */
    border?: string;
    /** Border width. Equals `1` by default if `border` property is defined. */
    borderWidth?: number;
    /** Border style. `'solid'` by default. */
    borderStyle?: string;
    /** Border radius. */
    borderRadius?: number | string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormHintSizeProperties {
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default. */
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormHintTheme {
    /** Common settings for all themes. */
    base?: FormHintThemeProperties;
    /** Available sizes. Any hint can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, FormHintSizeProperties>, 'md'>;
}

export interface FormErrorThemeProperties {
    /** Text color. */
    color?: string;
    /** Background color. */
    bg?: string;
    /** Border color. */
    border?: string;
    /** Border width. Equals `1` by default if `border` property is defined. */
    borderWidth?: number;
    /** Border style. `'solid'` by default. */
    borderStyle?: string;
    /** Border radius. */
    borderRadius?: number | string;
    /** Shadow. */
    shadow?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormErrorSizeProperties {
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default. */
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

export interface FormValidationIconProperties {
    /** Icon color. */
    fill?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export default interface FormTheme {
    /** Rules for error icon. */
    errorIcon?: FormValidationIconProperties;
    /** Rules for success icon. */
    successIcon?: FormValidationIconProperties;
    /** Additional CSS. */
    css?: CSSObject;
}
