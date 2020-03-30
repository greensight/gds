import React from 'react';
import { CSSObject } from '@emotion/core';
export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    /** Container content. */
    children: React.ReactNode;
    /** Additional CSS. */
    css?: CSSObject;
}
/**
 * Component for creating main page container with `layout` theme parameters. Uses `maxWidth`, `padding`,`marginLeft`, `marginRight`.
 */
export declare const Container: ({ children, css, ...props }: ContainerProps) => JSX.Element;
export default Container;
