import { CSSObject } from '@emotion/core';
import { SVGRIcon } from './Types';

export interface FontFaceProperties {
    /** Relative path to font asset in `woff2` format. */
    woff2?: string;
    /** Relative path to font asset in `woff` format. */
    woff?: string;
    /** Relative path to variable font asset in woff2 format. This option activates additional variable fonts rules in `typography` helper. */
    vf?: string;
    /** Font weight. */
    weight?: number | string;
    /** Italic font style. */
    italic?: boolean;
    /** Additional CSS. */
    css?: CSSObject;
}

export interface FontsProperties {
    /** Font-face settings for defined fonts styles. */
    fontFace: Record<string, FontFaceProperties[]>;
    /** Fallback fonts for specified font family. */
    stacks?: Record<string, string>;
    /** Fluid typography settings. Active by default. Pass `false` to disable completely or array of fonts to disable. */
    fluid?: boolean | string[];
}

export interface BaseProperties {
    /** Selection styles. */
    selection?: {
        /** Text color. */
        color?: string;
        /** Background color. */
        bg?: string;
        /** Additional CSS. */
        css?: CSSObject;
    };
    /** Focus styles. GDS uses outline styles with `focus-visible` polyfill.  */
    focus?: {
        /** Outline width. */
        width?: number;
        /** Outline color. */
        color?: string;
        /** Outline offset. */
        offset?: number;
        /** Additional CSS. */
        css?: CSSObject;
    };
    /** Body styles. */
    body?: {
        /** Typography style. */
        typography?: string;
        /** Text color. */
        color?: string;
        /** Background color. */
        bg?: string;
        /** Additional CSS. */
        css?: CSSObject;
    };
    /** Additional CSS. */
    css?: CSSObject;
}

export default interface GlobalTheme {
    /** Custom placeholder icon for autokits. Icon must be in `SVGR` format (React component). */
    placeholder?: SVGRIcon;
    /** Fonts settings. */
    fonts?: FontsProperties;
    /** Global styles. */
    base?: BaseProperties;
}
