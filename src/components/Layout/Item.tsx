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
export const Item: FC<LayoutItemProps> = ({ children, col, row, area, justify, align, order, grow, css, ...props }) => {
    const { type, gap, cols, auto } = useLayout();

    const gridColumnCSS = useCSSProperty({
        name: 'gridColumn',
        props: { col },
        condition: type === 'grid',
        transform: ({ col }) => {
            if (Array.isArray(col)) return `${col[0]} / ${col[1]}`;
            if (Number.isInteger(col)) return `span ${col}`;
            return col;
        },
    });
    const gridRowCSS = useCSSProperty({
        name: 'gridRow',
        props: { row },
        condition: type === 'grid',
        transform: ({ row }) => {
            if (Array.isArray(row)) return `${row[0]} / ${row[1]}`;
            if (Number.isInteger(row)) return `span ${row}`;
            return row;
        },
    });
    const gridAreaCSS = useCSSProperty({ name: 'gridArea', props: { area }, condition: type === 'grid' });
    const justifySelfCSS = useCSSProperty({ name: 'justifySelf', props: { justify }, condition: type === 'grid' });
    const alignSelfCSS = useCSSProperty({
        name: 'alignSelf',
        props: { align },
        transform: ({ align }) => {
            if (type === 'flex' && (align === 'start' || align === 'end')) return `flex-${align}`;
            return align;
        },
    });
    const orderCSS = useCSSProperty({ name: 'order', props: { order } });
    const flexGrowCSS = useCSSProperty({
        name: 'flexGrow',
        props: { grow, auto },
        condition: type === 'flex',
        transform: ({ grow, auto }) => {
            if (auto) return 1;
            return !Number.isInteger(grow) ? Number(grow) : grow;
        },
    });
    const paddingCSS = useCSSProperty({
        name: 'padding',
        props: { gap },
        condition: type === 'flex',
        transform: ({ gap }) => {
            if (Array.isArray(gap)) return `${gap[0]}px 0 0 ${gap[1]}px`;
            return `${gap}px 0 0 ${gap}px`;
        },
    });
    const flexBasisCSS = useCSSProperty({
        name: 'flexBasis',
        props: { col, auto },
        condition: type === 'flex',
        transform: ({ col, auto }) => {
            if (auto) return auto;
            if (typeof cols === 'number' && Number.isInteger(Number(col)))
                return `${Math.floor((100 * col * 100) / cols) / 100}%`;
            return col;
        },
    });

    const styles = useMemo(
        () => [
            gridColumnCSS,
            orderCSS,
            flexGrowCSS,
            paddingCSS,
            flexBasisCSS,
            alignSelfCSS,
            gridAreaCSS,
            justifySelfCSS,
            gridRowCSS,
            css,
        ],
        [
            alignSelfCSS,
            css,
            flexBasisCSS,
            flexGrowCSS,
            gridAreaCSS,
            gridColumnCSS,
            gridRowCSS,
            justifySelfCSS,
            orderCSS,
            paddingCSS,
        ],
    );

    return (
        <div css={styles} {...props}>
            {children}
        </div>
    );
};
