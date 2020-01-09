import * as React from 'react';
import useCSSProperty from '../../scripts/useCSSProperty';
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
                {
                    margin: '0 auto',
                },
                css,
            ]}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
