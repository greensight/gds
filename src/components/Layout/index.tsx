import * as React from 'react';
import { createContext, useContext } from 'react';
import useCSSProperty from '../../scripts/useCSSProperty';
import useTheme from '../../scripts/useTheme';
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
    auto,
    ...props
}) => {
    const { layout } = useTheme();

    return (
        <LayoutContext.Provider value={{ type, gap: gap || layout.gap, cols: cols || layout.cols, auto }}>
            <div
                css={[
                    useCSSProperty({
                        name: 'display',
                        value: [type, inline],
                        transform: ([type, inline]) => (inline ? `inline-${type}` : type),
                    }),
                    useCSSProperty({
                        name: 'gridTemplateColumns',
                        value: [cols, auto],
                        defaultProperty: 'cols',
                        condition: type === 'grid' && !areas,
                        transform: ([cols, auto]) => {
                            if (auto) return `repeat(auto-fit, minmax(${auto}px, 1fr))`;
                            if (Number.isInteger(cols)) return `repeat(${cols}, 1fr)`;
                            const arr = toArray(cols);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridTemplateRows',
                        value: rows,
                        condition: type === 'grid' && !areas,
                        transform: value => {
                            if (Number.isInteger(value)) return `repeat(${value}, 1fr)`;
                            const arr = toArray(value);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridTemplateAreas',
                        value: areas,
                        condition: type === 'grid',
                        transform: value => {
                            const arr = toArray(value);
                            return arr.map(val => `"${val}"`).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridGap',
                        value: gap,
                        defaultProperty: 'gap',
                        condition: type === 'grid',
                        transform: value => {
                            if (Array.isArray(value)) return `${value[0]}px ${value[1]}px`;
                            return value;
                        },
                    }),
                    useCSSProperty({
                        name: 'margin',
                        value: gap,
                        defaultProperty: 'gap',
                        condition: type === 'flex',
                        transform: value => {
                            if (Array.isArray(value)) return `-${value[0]}px 0 0 -${value[1]}px`;
                            return `-${value}px 0 0 -${value}px`;
                        },
                    }),
                    useCSSProperty({
                        name: 'justifyItems',
                        value: justify,
                        condition: type === 'grid',
                    }),
                    useCSSProperty({
                        name: 'justifyContent',
                        value: justify,
                        condition: type === 'flex',
                        transform: value => {
                            if (value === 'start' || value === 'end') return `flex-${value}`;
                            return value;
                        },
                    }),
                    useCSSProperty({
                        name: 'alignItems',
                        value: align,
                        transform: value => {
                            if (type === 'flex' && (value === 'start' || value === 'end')) return `flex-${value}`;
                            return value;
                        },
                    }),
                    useCSSProperty({
                        name: 'gridAutoRows',
                        value: autoRows,
                        condition: type === 'grid',
                        transform: value => {
                            const arr = toArray(value);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridAutoColumns',
                        value: autoCols,
                        condition: type === 'grid',
                        transform: value => {
                            const arr = toArray(value);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridAutoFlow',
                        value: [direction, dense],
                        condition: type === 'grid' && (direction === 'column' || dense),
                        transform: ([direction, dense]) =>
                            `${direction === 'column' ? 'column' : ''}${dense ? ' dense' : ''}`.trim(),
                    }),
                    useCSSProperty({
                        name: 'flexDirection',
                        value: [direction, reverse],
                        condition: type === 'flex' && (direction === 'column' || reverse),
                        transform: ([direction, reverse]) =>
                            `${direction === 'column' ? 'column' : 'row'}${reverse ? '-reverse' : ''}`,
                    }),
                    useCSSProperty({
                        name: 'flexWrap',
                        value: wrap,
                        condition: type === 'flex',
                        transform: value => (value ? 'wrap' : 'nowrap'),
                    }),
                ]}
                {...props}
            >
                {children}
            </div>
        </LayoutContext.Provider>
    );
};

export const Item: React.FC<ILayoutItem> = ({ children, col, row, area, justify, align, order, grow, ...props }) => {
    const { type, gap, cols, auto } = useContext(LayoutContext);

    return (
        <div
            css={[
                useCSSProperty({
                    name: 'gridColumn',
                    value: col,
                    condition: type === 'grid',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                        if (Number.isInteger(value)) return `span ${value}`;
                        return value;
                    },
                }),
                useCSSProperty({
                    name: 'gridRow',
                    value: row,
                    condition: type === 'grid',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                        if (Number.isInteger(value)) return `span ${value}`;
                        return value;
                    },
                }),
                useCSSProperty({
                    name: 'gridArea',
                    value: area,
                    condition: type === 'grid',
                }),
                useCSSProperty({
                    name: 'justifySelf',
                    value: justify,
                    condition: type === 'grid',
                }),
                useCSSProperty({
                    name: 'alignSelf',
                    value: align,
                    transform: value => {
                        if (type === 'flex' && (value === 'start' || value === 'end')) return `flex-${value}`;
                        return value;
                    },
                }),
                useCSSProperty({
                    name: 'order',
                    value: order,
                }),
                useCSSProperty({
                    name: 'flexGrow',
                    value: [grow, auto],
                    condition: type === 'flex',
                    transform: ([grow, auto]) => {
                        if (auto) return 1;
                        return !Number.isInteger(grow) ? Number(grow) : grow;
                    },
                }),
                useCSSProperty({
                    name: 'padding',
                    value: gap,
                    condition: type === 'flex',
                    transform: value => {
                        if (Array.isArray(value)) return `${value[0]}px 0 0 ${value[1]}px`;
                        return `${value}px 0 0 ${value}px`;
                    },
                }),
                useCSSProperty({
                    name: 'flexBasis',
                    value: [col, auto],
                    condition: type === 'flex',
                    transform: ([col, auto]) => {
                        if (auto) return auto;
                        if (Number.isInteger(Number(col))) return `${Math.floor((100 * col * 100) / cols) / 100}%`;
                        return col;
                    },
                }),
            ]}
            {...props}
        >
            {children}
        </div>
    );
};

Layout.Item = Item;

export default Layout;
