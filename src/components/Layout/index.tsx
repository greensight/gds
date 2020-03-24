import React, { createContext, useContext } from 'react';
import { CSSObject } from '@emotion/core';
import useTheme from '@utils/useTheme';
import baseTheme from '@utils/baseTheme';
import useCSSProperty from '@helpers/useCSSProperty';
import toArray from '@helpers/toArray';
import LayoutItem, { LayoutItemProps } from './Item';
import { AllowMedia } from '../../typings/Types.d';

export interface LayoutCompositionProps {
    Item: React.FC<LayoutItemProps>;
}

interface ILayoutContext {
    /** Layout type. Some properties are available only for one or another type. */
    type?: AllowMedia<'grid' | 'flex'>;
    /** Columns settings. */
    cols?: AllowMedia<number | string | Array<number | string>>;
    /** Gaps settings. */
    gap?: AllowMedia<number | string | [number | string, number | string]>;
    /** Minimum column size in auto mode. Auto mode allows to create columns of equal size without media queries. */
    auto?: AllowMedia<number>;
}

export interface LayoutProps extends ILayoutContext {
    /** Layout items list. */
    children: React.ReactNode;
    /** Inline mode. Changes `display` type.*/
    inline?: AllowMedia<boolean>;
    /** Rows. For grids only. */
    rows?: AllowMedia<number | string | (number | string)[]>;
    /** Areas. For grids only. */
    areas?: AllowMedia<string | string[]>;
    /** Main axis alignment. */
    justify?: AllowMedia<'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'>;
    /** Cross axis alignment. */
    align?: AllowMedia<'start' | 'end' | 'center' | 'stretch'>;
    /** Auto rows size. For grids only. */
    autoRows?: AllowMedia<number | string | (number | string)[]>;
    /** Auto cols size. For grids only. */
    autoCols?: AllowMedia<number | string | (number | string)[]>;
    /** Main axis direction. */
    direction?: AllowMedia<'row' | 'column'>;
    /** Dense mode. For grids only. */
    dense?: AllowMedia<boolean>;
    /** Reverse directions. For flex only. */
    reverse?: AllowMedia<boolean>;
    /** Multiline mode. For flex only. */
    wrap?: AllowMedia<boolean>;
    /** Additional CSS. */
    css?: CSSObject;
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
    gap = gap || layoutTheme.gap;
    cols = cols || layoutTheme.cols;

    return (
        <LayoutContext.Provider
            value={{ type, gap: gap !== undefined ? gap : layoutTheme.gap, cols: cols || layoutTheme.cols, auto }}
        >
            <div
                css={[
                    useCSSProperty({
                        name: 'display',
                        props: { type, inline },
                        transform: ({ type, inline }) => (inline ? `inline-${type}` : type),
                    }),
                    useCSSProperty({
                        name: 'gridTemplateColumns',
                        props: { cols, auto },
                        condition: type === 'grid' && !areas,
                        transform: ({ cols, auto }) => {
                            if (auto) return `repeat(auto-fill, minmax(${auto}px, 1fr))`;
                            if (Number.isInteger(cols)) return `repeat(${cols}, 1fr)`;
                            const arr = toArray(cols);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridTemplateRows',
                        props: { rows },
                        condition: type === 'grid' && !areas,
                        transform: ({ rows }) => {
                            if (Number.isInteger(rows)) return `repeat(${rows}, 1fr)`;
                            const arr = toArray(rows);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridTemplateAreas',
                        props: { areas },
                        condition: type === 'grid',
                        transform: ({ areas }) => {
                            const arr = toArray(areas);
                            return arr.map(val => `"${val}"`).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridGap',
                        props: { gap },
                        condition: type === 'grid',
                        transform: ({ gap }) => {
                            if (Array.isArray(gap)) return `${gap[0]}px ${gap[1]}px`;
                            return gap;
                        },
                    }),
                    useCSSProperty({
                        name: 'margin',
                        props: { gap },
                        condition: type === 'flex',
                        transform: ({ gap }) => {
                            if (Array.isArray(gap)) return `-${gap[0]}px 0 0 -${gap[1]}px`;
                            return `-${gap}px 0 0 -${gap}px`;
                        },
                    }),
                    useCSSProperty({ name: 'justifyItems', props: { justify }, condition: type === 'grid' }),
                    useCSSProperty({
                        name: 'justifyContent',
                        props: { justify },
                        condition: type === 'flex',
                        transform: ({ justify }) => {
                            if (justify === 'start' || justify === 'end') return `flex-${justify}`;
                            return justify;
                        },
                    }),
                    useCSSProperty({
                        name: 'alignItems',
                        props: { align },
                        transform: ({ align }) => {
                            if (type === 'flex' && (align === 'start' || align === 'end')) return `flex-${align}`;
                            return align;
                        },
                    }),
                    useCSSProperty({
                        name: 'gridAutoRows',
                        props: { autoRows },
                        condition: type === 'grid',
                        transform: ({ autoRows }) => {
                            const arr = toArray(autoRows);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridAutoColumns',
                        props: { autoCols },
                        condition: type === 'grid',
                        transform: ({ autoCols }) => {
                            const arr = toArray(autoCols);
                            return arr.map(val => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
                        },
                    }),
                    useCSSProperty({
                        name: 'gridAutoFlow',
                        props: { direction, dense },
                        condition: type === 'grid' && (direction === 'column' || !!dense),
                        transform: ({ direction, dense }) =>
                            `${direction === 'column' ? 'column' : ''}${dense ? ' dense' : ''}`.trim(),
                    }),
                    useCSSProperty({
                        name: 'flexDirection',
                        props: { direction, reverse },
                        condition: type === 'flex' && (direction === 'column' || !!reverse),
                        transform: ({ direction, reverse }) =>
                            `${direction === 'column' ? 'column' : 'row'}${reverse ? '-reverse' : ''}`,
                    }),
                    useCSSProperty({
                        name: 'flexWrap',
                        props: { wrap },
                        condition: type === 'flex',
                        transform: ({ wrap }) => (wrap ? 'wrap' : 'nowrap'),
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
