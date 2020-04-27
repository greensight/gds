import { CSSObject } from '@emotion/core';
import { ComponentStates, RequireAtLeastOne } from './Utils';

export interface LegendStateProperties {
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

export interface LegendThemeProperties extends LegendStateProperties {
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

export interface LegendStates extends Partial<Record<ComponentStates, LegendStateProperties>> {
    default: LegendThemeProperties;
    error?: LegendStateProperties;
    success?: LegendStateProperties;
}

export interface LegendSizeProperties {
    /** Typography style. Can be omitted if `fontSize`, `fontWeight` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'`, `700` and `1` by default. */
    typography?: string;
    /** Icon size. Equals `scale(3)` by default. */
    iconSize?: number;
    /** Offset between icon and text. Equals `scale(1)` by default. */
    iconOffset?: number;
    /** Paddings. Equals `0` by default. */
    padding?: string | number;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface LegendOptionalThemeProperties {
    /** Text color. */
    color?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface LegendOptionalStates extends Partial<Record<ComponentStates, LegendOptionalThemeProperties>> {
    default: LegendOptionalThemeProperties;
}

export interface LegendMarkThemeProperties {
    /** Asterisk color. */
    color?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface LegendMarkStates extends Partial<Record<ComponentStates, LegendMarkThemeProperties>> {
    default: LegendMarkThemeProperties;
}

export default interface LegendTheme {
    /** Available theme. */
    theme: {
        label: LegendStates;
        optional: LegendOptionalStates;
        mark: LegendMarkStates;
    };
    /** Available sizes. Any legend can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, LegendSizeProperties>, 'md'>;
    /** Rules for optional text. */
    optional?: LegendOptionalThemeProperties;
    /** Rules for asterisk. */
    mark?: LegendMarkThemeProperties;
}
