/// <reference types="react" />
import { SVGRIcon } from '../../types/Types';
export interface ButtonAutokitProps {
    /** Placeholder text. */
    text?: string;
    /** Placeholder icon (overrides placeholder from theme). */
    Icon?: SVGRIcon;
}
/**
 * Autokit for `Button` component.
 */
export declare const ButtonAutokit: ({ text, Icon }: ButtonAutokitProps) => JSX.Element[];
export default ButtonAutokit;
