import React from 'react';
import major from '../../src/scripts/major';

const Item = ({ children, bg, ...props }) => (
    <div
        css={theme => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: major(2),
            backgroundColor: bg || theme.app.colors.lightest,
        })}
        {...props}
    >
        {children}
    </div>
);

export default Item;
