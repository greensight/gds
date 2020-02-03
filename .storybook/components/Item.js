import React from 'react';
import scale from '../../src/scripts/scale';

const Item = ({ children, bg, ...props }) => (
    <div
        css={theme => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: scale(2),
            backgroundColor: bg || theme.colors.grey90,
        })}
        {...props}
    >
        {children}
    </div>
);

export default Item;
