import React from 'react';
import baseTheme from '../../src/scripts/baseTheme';

const Note = ({ icon, children }) => {
    const { colors } = baseTheme;

    return (
        <div
            css={{
                position: 'relative',
                padding: '16px 32px',
                background: colors.grey90,
                color: colors.grey0,
            }}
        >
            {icon && <span css={{ position: 'absolute', top: 16, left: 8 }}>{icon}</span>}
            {children}
        </div>
    );
};

export default Note;
