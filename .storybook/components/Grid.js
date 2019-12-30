import React from 'react';

const Grid = ({ children }) => (
    <div
        css={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            gridGap: 32,
            '@media (max-width: 720px)': {
                gridTemplateColumns: '1fr',
            },
        }}
    >
        {children}
    </div>
);

const GridItem = ({ children }) => <div>{children}</div>;

Grid.Item = GridItem;

export default Grid;
