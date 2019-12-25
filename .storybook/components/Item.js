import React from 'react';

const Item = ({ children }) => {
    return (
        <div
            css={{
                display: 'flex',
                justifyContent: 'center',
                height: '100%',
                padding: 16,
                border: '2px solid black',
                backgroundColor: 'white',
            }}
        >
            {children}
        </div>
    );
};

export default Item;
