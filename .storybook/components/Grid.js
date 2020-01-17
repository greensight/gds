import React from 'react';

// TODO Убрать ненужные компоненты Storybook и унифицировать документацию
// TODO Реализовать caption
// TODO Разобраться со вставкой изображений
// TODO Переконвертировать png из доков в jpeg

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
