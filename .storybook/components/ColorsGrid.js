import React from 'react';
import { useTheme } from 'emotion-theming';

const ColorsGrid = ({ children }) => {
    const theme = useTheme();

    return (
        <div
            css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridGap: theme.space[4],
            }}
        >
            {children}
        </div>
    );
};

export default ColorsGrid;
