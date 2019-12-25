import React from 'react';

const Layout = ({ children, gap, auto, autoMode = 'fill' }) => {
    let gridGap;
    if (gap) {
        if (Array.isArray(gap)) {
            gridGap = `${gap[0]}px ${gap[1]}px`;
        } else {
            gridGap = gap;
        }
    }

    let gridTemplateColumns;
    if (auto) {
        gridTemplateColumns = `repeat(auto-${autoMode}, minmax(${auto}px, 1fr))`;
    } else {
        gridTemplateColumns = 'repeat(12, 1fr)';
    }

    return (
        <div
            css={{
                display: 'grid',
                gridTemplateColumns,
                gridGap,
                justifyContent: 'stretch',
            }}
        >
            {children}
        </div>
    );
};

const Item = ({ children, column, row }) => {
    let gridColumn;
    if (column) {
        if (Array.isArray(column)) {
            gridColumn = `${column[0]} / ${column[1]}`;
        } else {
            gridColumn = `span ${column}`;
        }
    }

    let gridRow;
    if (row) {
        if (Array.isArray(row)) {
            gridRow = `${row[0]} / ${row[1]}`;
        } else {
            gridRow = `span ${row}`;
        }
    }
    return (
        <div
            css={{
                gridColumn,
                gridRow,
            }}
        >
            {children}
        </div>
    );
};

Layout.Item = Item;

export default Layout;
