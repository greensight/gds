import React from 'react';

const Item = ({ children, ...props }) => {
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
                ...props,
            }}
        >
            {children}
        </div>
    );
};

export default Item;
