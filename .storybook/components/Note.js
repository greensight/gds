import React from 'react';
import { useTheme } from 'emotion-theming';

const Note = ({ icon, children }) => {
    const theme = useTheme().app;
    const { colors } = theme;

    return (
        <div
            css={{
                position: 'relative',
                padding: `16px 32px`,
                background: colors.bg.lighter,
                color: colors.bg.dark,
            }}
        >
            {icon && <span css={{ position: 'absolute', top: 16, left: 8 }}>{icon}</span>}
            {children}
        </div>
    );
};

export default Note;
