import { CSSObject } from '@emotion/core';
import { ComponentStates, RequireAtLeastOne } from './Utils';

export interface RadioItemLabelStateProperties {
    /** Text color. */
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

export interface RadioItemLabelThemeProperties extends RadioItemLabelStateProperties {
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

export interface RadioItemCircleStateProperties {
    /** Element color. */
    color?: string;
    /** Border color. */
    border?: string;
    /** Shadow. */
    shadow?: string;
    /** Transforms */
    transform?: string;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface RadioItemCircleThemeProperties extends RadioItemCircleStateProperties {
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

export interface RadioItemLabelStates extends Partial<Record<ComponentStates, RadioItemLabelStateProperties>> {
    default: RadioItemLabelThemeProperties;
    checked: RadioItemLabelThemeProperties;
    error?: RadioItemLabelThemeProperties;
    success?: RadioItemLabelThemeProperties;
}

export interface RadioItemCircleStates extends Partial<Record<ComponentStates, RadioItemCircleStateProperties>> {
    default: RadioItemCircleThemeProperties;
    checked: RadioItemCircleThemeProperties;
    error?: RadioItemCircleThemeProperties;
    success?: RadioItemCircleThemeProperties;
}

export interface RadioItemSizeProperties {
    /** Big circle. Equals `scale(3)` by default. */
    outerSize?: number;
    /** Small circle. Equals `scale(1)` by default. */
    innerSize?: number;
    /** Offset between big circle and label. Equals `scale(1)` by default. */
    outerOffset?: number;
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
    /** Available theme. */
    theme: {
        label: RadioItemLabelStates;
        outer: RadioItemCircleStates;
        inner: RadioItemCircleStates;
    };
    /** Available sizes. Any radio item can have size from this list. You must define at least `md` size. */
    sizes: RequireAtLeastOne<Record<string, RadioItemSizeProperties>, 'md'>;
}
