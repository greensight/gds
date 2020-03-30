/// <reference types="react" />
import { Breakpoint } from '../../types/Types';
export interface ItemProps {
    /** Breakpoint name. */
    breakpointName: Breakpoint;
    /** Breakpoint value. */
    breakpointValue: number;
}
export declare const Item: ({ breakpointName, breakpointValue }: ItemProps) => JSX.Element;
export default Item;
