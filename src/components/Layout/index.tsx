import * as React from 'react';
import { createContext, useContext } from 'react';
import useCSSProperty from '../../scripts/useCSSProperty';
import toArray from '../../scripts/toArray';
import { ILayout, ILayoutItem } from './Layout';

const LayoutContext = createContext();

export const Layout: React.FC<ILayout> = ({
    children,
    type = 'grid',
    inline,
    cols,
    rows,
    areas,
    gap,
    justify,
    align,
    autoRows,
    autoCols,
    direction,
    dense,
    reverse,
    wrap = true,
    ...props
}) => {
    return (
        <LayoutContext.Provider value={{ type, gap, cols }}>
            <div
                css={{
                    display: useCSSProperty({
                        value: [type, inline],
                        transform: ([type, inline]) => (inline ? `inline-${type}` : type),
                    }),
                    gridTemplateColumns: useCSSProperty({
                        value: cols,
                        defaultProperty: 'cols',
                        condition: type === 'grid',
                        transform: value => {
                            if (Number.isInteger(value)) return `repeat(${value}, 1fr)`;
                            const arr = toArray(value);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    gridTemplateRows: useCSSProperty({
                        value: rows,
                        condition: type === 'grid',
                        transform: value => {
                            if (Number.isInteger(value)) return `repeat(${value}, 1fr)`;
                            const arr = toArray(value);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    gridTemplateAreas: useCSSProperty({
                        value: areas,
                        condition: type === 'grid',
                        transform: value => {
                            const arr = toArray(value);
                            return arr.map(val => `"${val}"`).join(' ');
                        },
                    }),
                    gridGap: useCSSProperty({
                        value: gap,
                        defaultProperty: 'gap',
                        condition: type === 'grid',
                        transform: value => {
                            if (Array.isArray(value)) return `${value[0]}px ${value[1]}px`;
                            return value;
                        },
                    }),
                    margin: useCSSProperty({
                        value: gap,
                        defaultProperty: 'gap',
                        condition: type === 'flex',
                        transform: value => {
                            if (Array.isArray(value)) return `-${value[0]}px 0 0 -${value[1]}px`;
                            return `-${value}px 0 0 -${value}px`;
                        },
                    }),
                    justifyItems: useCSSProperty({
                        value: justify,
                        condition: type === 'grid',
                    }),
                    justifyContent: useCSSProperty({
                        value: justify,
                        condition: type === 'flex',
                        transform: value => {
                            if (value === 'start' || value === 'end') return `flex-${value}`;
                            return value;
                        },
                    }),
                    alignItems: useCSSProperty({
                        value: align,
                        transform: value => {
                            if (type === 'flex' && (value === 'start' || value === 'end')) return `flex-${value}`;
                            return value;
                        },
                    }),
                    gridAutoRows: useCSSProperty({
                        value: autoRows,
                        condition: type === 'grid',
                        transform: value => {
                            const arr = toArray(value);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    gridAutoColumns: useCSSProperty({
                        value: autoCols,
                        condition: type === 'grid',
                        transform: value => {
                            const arr = toArray(value);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    gridAutoFlow: useCSSProperty({
                        value: [direction, dense],
                        condition: type === 'grid' && (direction === 'column' || dense),
                        transform: ([direction, dense]) =>
                            `${direction === 'column' ? 'column' : ''}${dense ? ' dense' : ''}`.trim(),
                    }),
                    flexDirection: useCSSProperty({
                        value: [direction, reverse],
                        condition: type === 'flex' && (direction === 'column' || reverse),
                        transform: ([direction, reverse]) =>
                            `${direction === 'column' ? 'column' : 'row'}${reverse ? '-reverse' : ''}`,
                    }),
                    flexWrap: useCSSProperty({
                        value: wrap,
                        condition: type === 'flex',
                        transform: value => (value ? 'wrap' : 'nowrap'),
                    }),
                }}
                {...props}
            >
                {children}
            </div>
        </LayoutContext.Provider>
    );
};

export const Item: React.FC<ILayoutItem> = ({
    children,
    col,
    row,
    area,
    justify,
    align,
    order,
    grow,
    shrink,
    basis = '100%',
    ...props
}) => {
    const { type, gap, cols } = useContext(LayoutContext);

    return (
        <div
            css={{
                gridColumn: useCSSProperty({
                    value: col,
                    condition: type === 'grid',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                        if (Number.isInteger(value)) return `span ${value}`;
                        return value;
                    },
                }),
                gridRow: useCSSProperty({
                    value: row,
                    condition: type === 'grid',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                        if (Number.isInteger(value)) return `span ${value}`;
                        return value;
                    },
                }),
                gridArea: useCSSProperty({
                    value: area,
                    condition: type === 'grid',
                }),
                justifySelf: useCSSProperty({
                    value: justify,
                    condition: type === 'grid',
                }),
                alignSelf: useCSSProperty({
                    value: align,
                    transform: value => {
                        if (type === 'flex' && (value === 'start' || value === 'end')) return `flex-${value}`;
                        return value;
                    },
                }),
                order: useCSSProperty({ value: order }),
                flexGrow: useCSSProperty({
                    value: grow,
                    condition: type === 'flex',
                    transform: value => (!Number.isInteger(value) ? Number(value) : value),
                }),
                flexShrink: useCSSProperty({
                    value: shrink,
                    condition: type === 'flex',
                    transform: value => (!Number.isInteger(value) ? Number(value) : value),
                }),
                padding: useCSSProperty({
                    value: gap,
                    condition: type === 'flex',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]}px 0 0 ${value[1]}px`;
                        return `${value}px 0 0 ${value}px`;
                    },
                }),
                flexBasis: useCSSProperty({
                    value: [col, basis],
                    condition: type === 'flex',
                    transform: ([col, basis]) => {
                        if (Number.isInteger(Number(col))) return `${Math.floor((100 * col * 100) / cols) / 100}%`;
                        if (col) return col;
                        return basis;
                    },
                }),
            }}
            {...props}
        >
            {children}
        </div>
    );
};

Layout.Item = Item;

export default Layout;
