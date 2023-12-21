import React, { useMemo } from 'react';

import { toArray } from '../../helpers/toArray';
import { useCSSProperty } from '../../helpers/useCSSProperty';
import { AllowMedia } from '../../types/Layout';
import { baseTheme } from '../../utils/baseTheme';
import { useTheme } from '../../utils/useTheme';
import { Item as LayoutItem } from './Item';
import { LayoutContext, LayoutContextProps } from './useLayout';

export interface CommonProps
    extends Omit<LayoutContextProps, 'type' | 'cols' | 'auto'>,
        Omit<React.HTMLProps<HTMLDivElement>, 'cols' | 'rows' | 'type' | 'wrap'> {
    /** Layout items list. */
    children: React.ReactNode;
    /** Inline mode. Changes `display` type.*/
    inline?: AllowMedia<boolean>;
    /** Main axis alignment. */
    justify?: AllowMedia<'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'>;
    /** Cross axis alignment. */
    align?: AllowMedia<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
    /** Main axis direction. */
    direction?: AllowMedia<'row' | 'column' | 'unset'>;
}

export interface GridProps extends Pick<LayoutContextProps, 'auto' | 'cols'> {
    /** Rows. For grids only. */
    rows?: AllowMedia<number | string | (number | string)[]>;
    /** Areas. For grids only. */
    areas?: AllowMedia<string | string[]>;
    /** Auto rows size. For grids only. */
    autoRows?: AllowMedia<number | string | (number | string)[]>;
    /** Auto cols size. For grids only. */
    autoCols?: AllowMedia<number | string | (number | string)[]>;
    /** Dense mode. For grids only. */
    dense?: AllowMedia<boolean>;
}

export interface FlexProps {
    /** Reverse directions. For flex only. */
    reverse?: AllowMedia<boolean>;
    /** Multiline mode. For flex only. */
    wrap?: AllowMedia<boolean>;
}

type Neverize<T extends Record<any, any>> = {
    [key in keyof T]?: never;
};

type DiscriminatedProps =
    | ({ type?: AllowMedia<'grid'> } & (GridProps & Neverize<FlexProps>))
    | ({ type?: AllowMedia<'flex'> } & (FlexProps & Neverize<GridProps>));

export interface LayoutProps extends CommonProps, GridProps, FlexProps {
    type?: 'grid' | 'flex';
}

type DiscriminatedLayoutProps = CommonProps & DiscriminatedProps;

/**
 * Component for creating typical grid and flex layouts.
 */
const LayoutComponent = ({
    type: typeProp = 'grid',
    inline: inlineProp,
    cols: colsProp,
    rows: rowsProp,
    areas: areasProp,
    gap: gapProp,
    justify: justifyProp,
    align: alignProp,
    autoRows: autoRowsProp,
    autoCols: autoColsProp,
    direction: directionProp,
    dense: denseProp,
    reverse: reverseProp,
    wrap: wrapProp = true,
    auto: autoProp,
    css,
    children,
    ...props
}: DiscriminatedLayoutProps) => {
    const { layout } = useTheme();
    const layoutTheme = layout || baseTheme.layout;
    const defaultGap = gapProp ?? layoutTheme.gap;
    const defaultCols = colsProp ?? layoutTheme.cols;

    const context = useMemo(
        () => ({ type: typeProp, gap: defaultGap, cols: defaultCols, auto: autoProp }),
        [typeProp, autoProp, defaultGap, defaultCols],
    );

    const display = useCSSProperty({
        name: 'display',
        props: { type: context.type, inline: inlineProp },
        transform: ({ type, inline }) => (inline ? `inline-${type}` : type),
    });

    const gridTemplateColumns = useCSSProperty({
        name: 'gridTemplateColumns',
        props: { cols: context.cols, auto: context.auto },
        condition: context.type === 'grid' && !areasProp,
        transform: ({ cols, auto }) => {
            if (auto) return `repeat(auto-fill, minmax(${auto}px, 1fr))`;
            if (Number.isInteger(cols)) return `repeat(${cols}, 1fr)`;
            const arr = toArray(cols);
            return arr.map((val) => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
        },
    });

    const gridTemplateRows = useCSSProperty({
        name: 'gridTemplateRows',
        props: { rows: rowsProp },
        condition: context.type === 'grid' && !areasProp,
        transform: ({ rows }) => {
            if (Number.isInteger(rows)) return `repeat(${rows}, 1fr)`;
            const arr = toArray(rows);
            return arr.map((val) => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
        },
    });

    const gridTemplateAreas = useCSSProperty({
        name: 'gridTemplateAreas',
        props: { areas: areasProp },
        condition: context.type === 'grid',
        transform: ({ areas }) => {
            const arr = toArray(areas);
            return arr.map((val) => `"${val}"`).join(' ');
        },
    });

    const gridGap = useCSSProperty({
        name: 'gridGap',
        props: { gap: context.gap },
        condition: context.type === 'grid',
        transform: ({ gap }) => {
            if (Array.isArray(gap)) return `${gap[0]}px ${gap[1]}px`;
            return gap;
        },
    });

    const margin = useCSSProperty({
        name: 'margin',
        props: { gap: context.gap },
        condition: context.type === 'flex',
        transform: ({ gap }) => {
            if (Array.isArray(gap)) return `-${gap[0]}px 0 0 -${gap[1]}px`;
            return `-${gap}px 0 0 -${gap}px`;
        },
    });

    const justifyItems = useCSSProperty({
        name: 'justifyItems',
        props: { justify: justifyProp },
        condition: context.type === 'grid',
    });

    const justifyContent = useCSSProperty({
        name: 'justifyContent',
        props: { justify: justifyProp },
        condition: context.type === 'flex',
        transform: ({ justify }) => {
            if (justify === 'start' || justify === 'end') return `flex-${justify}`;
            return justify;
        },
    });

    const alignItems = useCSSProperty({
        name: 'alignItems',
        props: { align: alignProp },
        transform: ({ align }) => {
            if (context.type === 'flex' && (align === 'start' || align === 'end')) return `flex-${align}`;
            return align;
        },
    });

    const gridAutoRows = useCSSProperty({
        name: 'gridAutoRows',
        props: { autoRows: autoRowsProp },
        condition: context.type === 'grid',
        transform: ({ autoRows }) => {
            const arr = toArray(autoRows);
            return arr.map((val) => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
        },
    });

    const gridAutoColumns = useCSSProperty({
        name: 'gridAutoColumns',
        props: { autoCols: autoColsProp },
        condition: context.type === 'grid',
        transform: ({ autoCols }) => {
            const arr = toArray(autoCols);
            return arr.map((val) => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
        },
    });

    const gridAutoFlow = useCSSProperty({
        name: 'gridAutoFlow',
        props: { direction: directionProp, dense: denseProp },
        condition: context.type === 'grid' && (directionProp === 'column' || !!denseProp),
        transform: ({ direction, dense }) => `${direction === 'column' ? 'column' : ''}${dense ? ' dense' : ''}`.trim(),
    });

    const flexDirection = useCSSProperty({
        name: 'flexDirection',
        props: { direction: directionProp, reverse: reverseProp },
        condition: context.type === 'flex',
        transform: ({ direction, reverse }) =>
            `${direction === 'column' ? 'column' : 'row'}${reverse ? '-reverse' : ''}`,
    });

    const flexWrap = useCSSProperty({
        name: 'flexWrap',
        props: { wrap: wrapProp },
        condition: context.type === 'flex',
        transform: ({ wrap }) => (wrap ? 'wrap' : 'nowrap'),
    });

    const layoutCss = useMemo(
        () => [
            display,
            margin,

            flexWrap,
            flexDirection,
            justifyItems,
            justifyContent,
            alignItems,

            gridTemplateColumns,
            gridTemplateRows,
            gridTemplateAreas,
            gridAutoColumns,
            gridAutoRows,
            gridAutoFlow,
            gridGap,

            css,
        ],
        [
            display,
            margin,
            flexWrap,
            flexDirection,
            justifyItems,
            justifyContent,
            alignItems,
            gridTemplateColumns,
            gridTemplateRows,
            gridTemplateAreas,
            gridAutoColumns,
            gridAutoRows,
            gridAutoFlow,
            gridGap,
            css,
        ],
    );

    return (
        <LayoutContext.Provider value={context}>
            <div css={layoutCss} {...props}>
                {children}
            </div>
        </LayoutContext.Provider>
    );
};

const Layout = Object.assign(LayoutComponent, {
    Item: LayoutItem,
});

export { Layout };
