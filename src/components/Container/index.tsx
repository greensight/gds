import * as React from 'react';
import useCSSProperty from '../../scripts/useCSSProperty';
import IContainer from './Container';

const Container: React.FC<IContainer> = ({ children, maxWidth, padding, ...props }) => {
    return (
        <div
            css={{
                maxWidth: useCSSProperty({
                    value: maxWidth,
                    defaultProperty: 'container',
                }),
                margin: '0 auto',
                padding: useCSSProperty({
                    value: padding,
                    defaultProperty: 'padding',
                    transform: value => `0 ${value}px`,
                }),
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
