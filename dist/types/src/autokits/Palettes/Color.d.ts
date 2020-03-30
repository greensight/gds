/// <reference types="react" />
export interface ColorProps {
    /** Color hex value. */
    color: string;
    /** Color index. */
    index: number;
}
export declare const Color: ({ color, index }: ColorProps) => JSX.Element;
export default Color;
