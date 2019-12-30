import React from 'react';

const Item = ({ children, ...props }) => (
    <div
        css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: 16,
            border: '2px solid black',
            ...props,
        }}
    >
        {children}
    </div>
);

export default Item;
