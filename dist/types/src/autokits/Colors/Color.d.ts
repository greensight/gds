/// <reference types="react" />
export interface ColorProps {
    /** Color variable name. */
    name: string;
    /** Color value. */
    value: string;
}
export declare const Color: ({ name, value }: ColorProps) => JSX.Element;
export default Color;
