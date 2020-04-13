import { CSSObject } from '@emotion/core';
import { ComponentStates, RequireAtLeastOne } from './Utils';

export interface RadioItemStateProperties {
    /** Text. */
    color?: string;
    /** Background color. */
    bg?: string;
    /** Border color. */
    border?: string;
    /** Shadow. */
    shadow?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface RadioItemThemeProperties extends RadioItemStateProperties {
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

export interface RadioItemStates extends Partial<Record<ComponentStates, RadioItemStateProperties>> {
    default: RadioItemThemeProperties;
    label?: RadioItemThemeProperties;
    after?: RadioItemThemeProperties;
    before?: RadioItemThemeProperties;
}

export interface RadioItemSizeProperties {
    /** Big circle. Equals `scale(3)` by default. */
    beforeSize?: number;
    /** Small circle. Equals `scale(1)` by default. */
    afterSize?: number;
    /** Offset between big circle and label. Equals `scale(1)` by default. */
    beforeOffset?: number;
    /** Horizontal offset between neighboring radio items if they have horizontal orientation. Equals `scale(2)` by default. */
    horizontalGap?: number;
    /** Vertical offset between neighboring radio items if they hav vertical orientation. Equals `scale(1)` by default. */
    verticalGap?: number;
    /** Typography style. Can be omitted if `fontSize` and `lineHeight` properties are defined via `css` settings. Equals `'1rem'` and `1.4` by default.*/
    typography?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface RadioItemTheme {
    /** Common settings for all themes. */
    base?: RadioItemStates;
    /** Available theme. */
    theme: RadioItemStates;
    /** Available sizes. Any radio item can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, RadioItemSizeProperties>, 'md'>;
}
