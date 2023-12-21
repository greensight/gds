import { CSSObject } from '@emotion/react';
import React, { FC, useMemo } from 'react';

import { useCSSProperty } from '../../helpers/useCSSProperty';
import { AllowMedia } from '../../types/Layout';
import { useLayout } from './useLayout';

export interface LayoutItemProps extends React.HTMLProps<HTMLDivElement> {
    /** Item content. */
    children?: React.ReactNode;
    /** Column settings. */
    col?: AllowMedia<number | [number, number] | string>;
    /** Row settings. For grids only. */
    row?: AllowMedia<number | [number, number] | string>;
    /** Area name. For grids only. */
    area?: AllowMedia<string>;
    /** Main axis self alignment. For grids only. */
    justify?: AllowMedia<'start' | 'end' | 'center' | 'stretch'>;
    /** Cross axis self alignment. */
    align?: AllowMedia<'start' | 'end' | 'center' | 'stretch'>;
    /** Order. */
    order?: AllowMedia<number>;
    /** Expand on all available space. For flex only.  */
    grow?: AllowMedia<boolean | number>;
}

/**
 * Inner `Layout` component for creating layout cells.
 */
export const Item: FC<LayoutItemProps> = ({
    children,
    col: colProp,
    row: rowProp,
    area: areaProp,
    justify,
    align: alignProp,
    order: orderProp,
    grow: growProp,
    css,
    ...props
}) => {
    const context = useLayout();

    const gridColumn = useCSSProperty({
        name: 'gridColumn',
        props: { col: colProp },
        condition: context.type === 'grid',
        transform: ({ col }) => {
            if (Array.isArray(col)) return `${col[0]} / ${col[1]}`;
            if (Number.isInteger(col)) return `span ${col}`;
            return col;
        },
    });

    const gridRow = useCSSProperty({
        name: 'gridRow',
        props: { row: rowProp },
        condition: context.type === 'grid',
        transform: ({ row }) => {
            if (Array.isArray(row)) return `${row[0]} / ${row[1]}`;
            if (Number.isInteger(row)) return `span ${row}`;
            return row;
        },
    });

    const gridArea = useCSSProperty({
        name: 'gridArea',
        props: { area: areaProp },
        condition: context.type === 'grid',
    });

    const justifySelf = useCSSProperty({
        name: 'justifySelf',
        props: { justify },
        condition: context.type === 'grid',
    });

    const alignSelf = useCSSProperty({
        name: 'alignSelf',
        props: { align: alignProp },
        transform: ({ align }) => {
            if (context.type === 'flex' && (align === 'start' || align === 'end')) return `flex-${align}`;
            return align;
        },
    });

    const order = useCSSProperty({ name: 'order', props: { order: orderProp } });

    const flexGrow = useCSSProperty({
        name: 'flexGrow',
        props: { grow: growProp, auto: context.auto },
        condition: context.type === 'flex',
        transform: ({ grow, auto }) => {
            if (auto) return 1;
            return !Number.isInteger(grow) ? Number(grow) : grow;
        },
    });

    const padding = useCSSProperty({
        name: 'padding',
        props: { gap: context.gap },
        condition: context.type === 'flex',
        transform: ({ gap }) => {
            if (Array.isArray(gap)) return `${gap[0]}px 0 0 ${gap[1]}px`;
            return `${gap}px 0 0 ${gap}px`;
        },
    });

    const flexBasis = useCSSProperty({
        name: 'flexBasis',
        props: { col: colProp, auto: context.auto },
        condition: context.type === 'flex',
        transform: ({ col, auto }) => {
            if (auto) return auto;
            if (typeof context.cols === 'number' && Number.isInteger(Number(col)))
                return `${Math.floor((100 * col * 100) / context.cols) / 100}%`;
            return col;
        },
    });

    const layoutItemCss = useMemo(
        () => [padding, order, flexGrow, flexBasis, justifySelf, alignSelf, gridColumn, gridRow, gridArea, css],
        [padding, order, flexGrow, flexBasis, justifySelf, alignSelf, gridColumn, gridRow, gridArea, css],
    );

    return (
        <div css={layoutItemCss} {...props}>
            {children}
        </div>
    );
};
