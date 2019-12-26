import React from 'react';

const Item = ({ children, style }) => {
    return (
        <div
            css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                padding: 16,
                boxShadow: '0 0 0 2px black',
                // backgroundColor: '#ebebeb',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Item;
