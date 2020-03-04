import * as React from 'react';
import useCSSProperty from '@helpers/useCSSProperty';
import IContainer from './Container';

const Container: React.FC<IContainer> = ({ children, css, ...props }) => {
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
