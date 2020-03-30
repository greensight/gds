/// <reference types="react" />
import { SVGRIcon } from '../../types/Types';
export interface IconProps {
    /** Icon variable name. */
    name: string;
    /** Icon component. */
    Component: SVGRIcon;
    /** Path to icon from icons directory. */
    path: string;
}
export declare const Icon: ({ name, Component, path }: IconProps) => JSX.Element;
export default Icon;
