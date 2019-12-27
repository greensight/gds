import React from 'react';
import isObject from '../../scripts/isObject';
import useTheme from '../../scripts/useTheme';

// TODO Move cols/gap defaults to config/theme

const Layout = ({ children, cols, rows, gap, auto, justify, align }) => {
    const { layout } = useTheme();

    let gridTemplateColumns;
    if (auto) {
        gridTemplateColumns = {
            gridTemplateColumns: `repeat(auto-fill, minmax(${auto}px, 1fr))`,
        };
    } else {
        gridTemplateColumns = setProperty('gridTemplateColumns', cols || layout.cols, layout.breakpoints, value =>
            Number.isInteger(value) ? `repeat(${value}, 1fr)` : value,
        );
    }

    const gridTemplateRows = setProperty('gridTemplateRows', rows, layout.breakpoints, value =>
        Number.isInteger(value) ? `repeat(${value}, 1fr)` : value,
    );

    const gridGap = setProperty('gridGap', gap || layout.gap, layout.breakpoints, value =>
        Array.isArray(value) ? `${value[0]}px ${value[1]}px` : value,
    );

    const justifyItems = setProperty('justifyItems', justify, layout.breakpoints);
    const alignItems = setProperty('alignItems', align, layout.breakpoints);

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
    const { layout } = useTheme();

    const gridColumn = setProperty('gridColumn', col, layout.breakpoints, value =>
        Array.isArray(value) ? `${value[0]} / ${value[1]}` : `span ${value}`,
    );

    const gridRow = setProperty('gridRow', row, layout.breakpoints, value =>
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

const NAMES = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

const setProperty = (name, value, breakpoints, transform) => {
    if (!value) return;

    if (!isObject(value)) return setValue(name, value, transform);

    // TODO Вероятно стоит свести все @media к хелперу

    return Object.entries(value)
        .sort(([a], [b]) => NAMES.indexOf(b) - NAMES.indexOf(a))
        .reduce((acc, [bp, bpValue], index) => {
            const rule = setValue(name, bpValue, transform);
            return {
                ...acc,
                ...(index ? { [`@media (max-width: ${breakpoints[bp] - 1}px)`]: rule } : rule),
            };
        }, {});
};

const setValue = (name, value, transform) => ({
    [name]: transform ? transform(value) : value,
});

Layout.Item = Item;

export default Layout;
