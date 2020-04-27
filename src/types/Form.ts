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
    /** Half mode. Redefines `border-radius` with value equals half of input height. */
    half?: boolean;
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
    /** Paddings. Equals `0.4em scale(1)` by default. */
    padding?: string | number;
    /** Icon size. Equals `scale(3)` by default. */
    iconSize?: number;
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default. */
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormInputTheme {
    /** Common settings for inputs. */
    base?: FormInputStates;
    /** Settings for theme. */
    theme: FormInputStates;
    /** Available sizes. Any input can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, FormInputSizeProperties>, 'md'>;
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
    /** Shadow. */
    shadow?: string;
    /** Text align. */
    textAlign?: 'left' | 'center' | 'right';
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormHintSizeProperties {
    /** Spacing above hint. */
    topGap: number;
    /** Paddings. Equals `0` by default. */
    padding?: string | number;
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default. */
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormHintTheme {
    /** Available theme. */
    theme?: FormHintThemeProperties;
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
    /** Text align. */
    textAlign?: 'left' | 'center' | 'right';
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormErrorSizeProperties {
    /** Spacing above error. */
    topGap: number;
    /** Paddings. Equals `0` by default. */
    padding?: string | number;
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default. */
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FormErrorTheme {
    /** Common settings for all themes. */
    theme?: FormErrorThemeProperties;
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
