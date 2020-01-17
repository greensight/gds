import React from 'react';
import useTheme from '../../src/scripts/useTheme';

const Note = ({ icon, children }) => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <div
            css={{
                position: 'relative',
                padding: '16px 32px',
                background: colors.grey90,
                color: colors.grey20,
            }}
        >
            {icon && <span css={{ position: 'absolute', top: 16, left: 8 }}>{icon}</span>}
            {children}
        </div>
    );
};

export default Note;
