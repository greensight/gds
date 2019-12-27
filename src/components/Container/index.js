import React from 'react';
import major from '../../scripts/major';

const Container = ({ children, css }) => {
    console.log('css', css);
    // TODO add container and padding
    return (
        <div
            css={{
                width: major(180),
                margin: '0 auto',
            }}
        >
            {children}
        </div>
    );
};

export default Container;
