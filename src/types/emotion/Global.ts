import { CSSObject } from '@emotion/react';

import { SVGRIcon } from '../Utils';

export interface BodyProperties {
    /** Typography style. */
    typography?: string;
    /** Text color. */
    color?: string;
    /** Background color. */
    bg?: string;
    /** Additional CSS. */
    css?: any;
}

export interface FocusProperties {
    /** Outline width. */
    width?: number;
    /** Outline color. */
    color?: string;
    /** Outline offset. */
    offset?: number;
    /** Additional CSS. */
    css?: any;
}

export interface SelectionProperties {
    /** Text color. */
    color?: string;
    /** Background color. */
    bg?: string;
    /** Additional CSS. */
    css?: any;
}

export interface BaseProperties {
    /** Body styles. */
    body?: BodyProperties;
    /** Focus styles. GDS uses outline styles with `focus-visible` polyfill.  */
    focus?: FocusProperties;
    /** Selection styles. */
    selection?: SelectionProperties;
    /** Additional CSS. */
    css?: any;
}

export interface FontFamilyProperties {
    /** Fallback fonts for specified font family. */
    stack?: string;
    /** Variable font. */
    vf?: boolean;
}

export interface FontsProperties {
    /** Font families settings. Used in `Typography` autokit and `typography` helper. */
    families?: Record<string, FontFamilyProperties>;
    /** Fluid typography settings. Active by default. Pass `false` to disable completely or array of fonts to disable. */
    fluid?: boolean | string[];
    /** `@font-face` definitions. */
    fontFace?: CSSObject[];
}

export interface GlobalTheme {
    /** Custom placeholder icon for autokits. Icon must be in `SVGR` format (React component). */
    placeholder?: SVGRIcon;
    /** Global styles. */
    base?: BaseProperties;
    /** Fonts settings. */
    fonts?: FontsProperties;
}
