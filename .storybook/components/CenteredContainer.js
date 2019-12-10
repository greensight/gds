import React from 'react';

const CenteredContainer = ({ children }) => (
    <div
        css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
        }}
    >
        {children}
    </div>
);

export default CenteredContainer;
