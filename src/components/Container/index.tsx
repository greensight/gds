import React from 'react';
import { CSSObject } from '@emotion/core';
import useCSSProperty from '@helpers/useCSSProperty';

export interface ContainerProps {
    /** Container content */
    children: React.ReactNode;
    /** Custom CSS */
    css?: CSSObject;
}

export const Container = ({ children, css, ...props }: ContainerProps) => {
    return (
        <div
            css={[
                useCSSProperty({
                    name: 'maxWidth',
                    defaultProperty: 'container',
                }),
                useCSSProperty({
                    name: 'padding',
                    defaultProperty: 'padding',
                    transform: value => `0 ${value}px`,
                }),
                useCSSProperty({
                    name: 'marginLeft',
                    defaultProperty: 'marginLeft',
                }),
                useCSSProperty({
                    name: 'marginRight',
                    defaultProperty: 'marginRight',
                }),
                css,
            ]}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
