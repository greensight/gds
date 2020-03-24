import React, { createContext, useContext } from 'react';
import useTheme from '@utils/useTheme';
import baseTheme from '@utils/baseTheme';
import useCSSProperty from '@helpers/useCSSProperty';
import toArray from '@helpers/toArray';
import LayoutItem, { LayoutItemProps } from './Item';

export interface LayoutCompositionProps {
    Item: React.FC<LayoutItemProps>;
}

interface ILayoutContext {
    /** Тип сетки */
    type?: 'grid' | 'flex';
    /** Колонки */
    cols?: number | string | Array<number | string>;
    /** Отступы */
    gap?: number | string | [number | string, number | string];
    /** Минимальный размер элемента в авто-режиме */
    auto?: number;
}

export interface LayoutProps extends ILayoutContext {
    /** Содержимое сетки */
    children: React.ReactNode;
    /** Инлайн */
    inline?: boolean;
    /** Строки (type: 'grid') */
    rows?: number | string | (number | string)[];
    /** Зоны (type: 'grid') */
    areas?: string | string[];
    /** Выравнивание основной оси */
    justify?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    /** Выравнивание побочной оси */
    align?: 'start' | 'end' | 'center' | 'stretch';
    /** Размер строк неявной сетки (type: 'grid') */
    autoRows?: number | string | (number | string)[];
    /** Размер колонок неявной сетки (type: 'grid') */
    autoCols?: number | string | (number | string)[];
    /** Направление основной оси */
    direction?: 'row' | 'column';
    /** Денс-денс (type: 'grid') */
    dense?: boolean;
    /** Обратное направление (type: 'flex') */
    reverse?: boolean;
    /** Многострочный режим (type: 'flex') */
    wrap?: boolean;
    /** Кастомный CSS */
    css?: Record<string, any>;
}

const LayoutContext = createContext<ILayoutContext | undefined>(undefined);

export const useLayout = (): ILayoutContext => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('This component must be used within a <Layout> component');
    }

    return context;
};

export const Layout: React.FC<LayoutProps> & LayoutCompositionProps = ({
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
    css,
    ...props
}) => {
    const { layout } = useTheme();
    const layoutTheme = layout || baseTheme.layout;

    return (
        <LayoutContext.Provider
            value={{ type, gap: gap !== undefined ? gap : layoutTheme.gap, cols: cols || layoutTheme.cols, auto }}
        >
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
                            if (auto) return `repeat(auto-fill, minmax(${auto}px, 1fr))`;
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
                    css,
                ]}
                {...props}
            >
                {children}
            </div>
        </LayoutContext.Provider>
    );
};

Layout.Item = LayoutItem;

export default Layout;
