import { CSSObject } from '@emotion/core';
import { ComponentStates, RequireAtLeastOne } from './Types';
export interface ButtonStateProperties {
    /** Text and icon color. */
    color?: string;
    /** Background color. */
    bg?: string;
    /** Border color. */
    border?: string;
    /** Shadow. Mostly for `active` state. */
    shadow?: string;
    /** Additional CSS. */
    css?: CSSObject;
}
export interface ButtonThemeProperties extends ButtonStateProperties {
    /** Border width. Equals `1` by default if `border` property is defined. */
    borderWidth?: number;
    /** Border style. `'solid'` by default. */
    borderStyle?: string;
    /** Border radius. */
    borderRadius?: number | string;
    /** Half mode. Redefines `border-radius` with value equals half of button height. */
    half?: boolean;
    /** Round mode. Redefines `border-radius` with `'50%'` value for `hidden` mode. Doesn't affect buttons with visible text. */
    round?: boolean;
    /** Transition duration. Equals `200` by default. */
    time?: number;
    /** Transition enter duration for hover state. Uses with `time` property to differ enter/exit transition durations. */
    timeIn?: number;
    /** Transition easing function. Equals `'ease'` by default. */
    easing?: string;
}
export interface ButtonStates extends Partial<Record<ComponentStates, ButtonStateProperties>> {
    default: ButtonThemeProperties;
}
export interface ButtonSizeProperties {
    /** Height. Equals `scale(6)` by default. */
    height?: number;
    /** Horizontal paddings. Equals `scale(3)` by default. */
    padding?: number;
    /** Icon size. Equals `scale(3)` by default. */
    iconSize?: number;
    /** Offset between icon and text. Equals `scale(1)` by default. */
    iconOffset?: number;
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default.*/
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}
export default interface ButtonTheme {
    /** Common settings for all themes. */
    base?: ButtonStates;
    /** Available themes. Any button can have theme from this list. You must define at least `primary` theme. */
    themes: RequireAtLeastOne<Record<string, ButtonStates>, 'primary'>;
    /** Available sizes. Any button can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, ButtonSizeProperties>, 'md'>;
}
