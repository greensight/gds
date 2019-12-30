import * as React from 'react';
import { createContext, useContext } from 'react';
import isObject from '../../scripts/isObject';
import useTheme from '../../scripts/useTheme';
import { ILayout, ILayoutItem } from './Layout';
import toArray from '../../scripts/toArray';

// TODO Добавить flex support
// TODO Разобраться что media, что нет

const LayoutContext = createContext();

export const Layout: React.FC<ILayout> = ({
    children,
    type = 'grid',
    inline = false,
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
    wrap,
    ...props
}) => {
    // flex support: cols, rows, gap
    // media support: type, inline, direction, dense, reverse, wrap
    const { layout } = useTheme();

    const gridTemplateColumns =
        type === 'grid'
            ? setProperty('gridTemplateColumns', cols || layout.cols, layout.breakpoints, value => {
                  if (Number.isInteger(value)) return `repeat(${value}, 1fr)`;
                  const arr = toArray(value);
                  return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
              })
            : undefined;

    const gridTemplateRows =
        type === 'grid'
            ? setProperty('gridTemplateRows', rows, layout.breakpoints, value => {
                  if (Number.isInteger(value)) return `repeat(${value}, 1fr)`;
                  const arr = toArray(value);
                  return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
              })
            : undefined;

    const gridTemplateAreas =
        type === 'grid'
            ? setProperty('gridTemplateAreas', areas, layout.breakpoints, value => {
                  const arr = toArray(value);
                  return arr.map(val => `"${val}"`).join(' ');
              })
            : undefined;

    const gridGap =
        type === 'grid'
            ? setProperty('gridGap', gap || layout.gap, layout.breakpoints, value => {
                  if (Array.isArray(value)) return `${value[0]}px ${value[1]}px`;
                  return value;
              })
            : undefined;

    const justifyItems = type === 'grid' ? setProperty('justifyItems', justify, layout.breakpoints) : undefined;
    const justifyContent =
        type === 'flex'
            ? setProperty('justifyContent', justify, layout.breakpoints, value => {
                  if (value === 'start' || value === 'end') return `flex-${value}`;
                  return value;
              })
            : undefined;

    const alignItems = setProperty('alignItems', align, layout.breakpoints, value => {
        if (type === 'flex' && (value === 'start' || value === 'end')) return `flex-${value}`;
        return value;
    });

    const gridAutoRows =
        type === 'grid'
            ? setProperty('gridAutoRows', autoRows, layout.breakpoints, value => {
                  const arr = toArray(value);
                  return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
              })
            : undefined;

    const gridAutoColumns =
        type === 'grid'
            ? setProperty('gridAutoColumns', autoCols, layout.breakpoints, value => {
                  const arr = toArray(value);
                  return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
              })
            : undefined;

    const gridAutoFlow =
        type === 'grid' && (direction === 'column' || dense)
            ? {
                  gridAutoFlow: `${direction === 'column' ? 'column' : ''}${dense ? ' dense' : ''}`.trim(),
              }
            : undefined;

    const flexDirection =
        type === 'flex' && (direction === 'column' || reverse)
            ? {
                  flexDirection: `${direction === 'column' ? 'column' : 'row'}${reverse ? '-reverse' : ''}`,
              }
            : undefined;

    const flexWrap =
        type === 'flex'
            ? setProperty('flexWrap', wrap, layout.breakpoints, value => (value ? 'wrap' : 'nowrap'))
            : undefined;

    return (
        <LayoutContext.Provider value={{ type }}>
            <div
                css={{
                    display: inline ? `inline-${type}` : type,
                    ...gridTemplateColumns,
                    ...gridTemplateRows,
                    ...gridTemplateAreas,
                    ...gridGap,
                    ...justifyItems,
                    ...justifyContent,
                    ...alignItems,
                    ...gridAutoRows,
                    ...gridAutoColumns,
                    ...gridAutoFlow,
                    ...flexDirection,
                    ...flexWrap,
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
    basis,
    ...props
}) => {
    // flex support: col, row
    const { layout } = useTheme();

    const { type } = useContext(LayoutContext);

    const gridColumn =
        type === 'grid'
            ? setProperty('gridColumn', col, layout.breakpoints, value => {
                  if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                  if (Number.isInteger(value)) return `span ${value}`;
                  return value;
              })
            : undefined;

    const gridRow =
        type === 'grid'
            ? setProperty('gridRow', row, layout.breakpoints, value => {
                  if (Array.isArray(value)) return `${value[0]} / ${value[1]}`;
                  if (Number.isInteger(value)) return `span ${value}`;
                  return value;
              })
            : undefined;

    const justifySelf = type === 'grid' ? setProperty('justifySelf', justify, layout.breakpoints) : undefined;

    const alignSelf = setProperty('alignSelf', align, layout.breakpoints, value => {
        if (type === 'flex' && (value === 'start' || value === 'end')) return `flex-${value}`;
        return value;
    });

    let flexGrow;
    if (type === 'flex' && grow !== undefined) {
        flexGrow = !Number.isInteger(grow) ? Number(grow) : grow;
    }

    let flexShrink;
    if (type === 'flex' && shrink !== undefined) {
        flexShrink = !Number.isInteger(shrink) ? Number(shrink) : shrink;
    }

    return (
        <div
            css={{
                ...gridColumn,
                ...gridRow,
                gridArea: type === 'grid' && area ? area : undefined,
                ...justifySelf,
                ...alignSelf,
                order,
                flexGrow,
                flexShrink,
                flexBasis: type === 'flex' ? basis : undefined,
            }}
            {...props}
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
