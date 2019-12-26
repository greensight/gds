import React from 'react';
import isObject from '../../scripts/isObject';
import mq from '../../scripts/mediaQueries';
import major from '../../scripts/major';

// TODO Move cols/gap defaults to config/theme

const Layout = ({ children, cols = 10, rows, gap = major(3), auto, justify, align }) => {
    let gridTemplateColumns;
    if (auto) {
        gridTemplateColumns = {
            gridTemplateColumns: `repeat(auto-fill, minmax(${auto}px, 1fr))`,
        };
    } else {
        gridTemplateColumns = setProperty('gridTemplateColumns', cols, value =>
            Number.isInteger(value) ? `repeat(${value}, 1fr)` : value,
        );
    }
    const gridTemplateRows = setProperty('gridTemplateRows', rows, value =>
        Number.isInteger(value) ? `repeat(${value}, 1fr)` : value,
    );
    const gridGap = setProperty('gridGap', gap, value =>
        Array.isArray(value) ? `${value[0]}px ${value[1]}px` : value,
    );
    const justifyItems = setProperty('justifyItems', justify);
    const alignItems = setProperty('alignItems', align);

    return (
        <div
            css={{
                display: 'grid',
                ...gridTemplateColumns,
                ...gridTemplateRows,
                ...gridGap,
                ...justifyItems,
                ...alignItems,
            }}
        >
            {children}
        </div>
    );
};

const Item = ({ children, col, row }) => {
    const gridColumn = setProperty('gridColumn', col, value =>
        Array.isArray(value) ? `${value[0]} / ${value[1]}` : `span ${value}`,
    );
    const gridRow = setProperty('gridRow', row, value =>
        Array.isArray(value) ? `${value[0]} / ${value[1]}` : `span ${value}`,
    );

    return (
        <div
            css={{
                ...gridColumn,
                ...gridRow,
            }}
        >
            {children}
        </div>
    );
};

const setProperty = (name, value, transform) => {
    if (!value) return;

    if (!isObject(value)) value = { default: value };

    return Object.entries(value).reduce((acc, [bp, bpValue]) => {
        const rule = {
            [name]: transform ? transform(bpValue) : bpValue,
        };

        return {
            ...acc,
            ...(mq[bp] ? { [mq[bp]]: rule } : rule),
        };
    }, {});
};

Layout.Item = Item;

export default Layout;
