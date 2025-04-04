import React, { ElementType, forwardRef, Ref, useMemo } from 'react';

import cn from 'classnames';

import { useCSSProperty } from '../../../helpers/scss/useCSSProperty';
import { useGenerateProperty } from '../../../helpers/scss/useGenerateProperty';

import { scale } from '../../../utils/common/scale';

import { colsTransform, gapTransform, rowsTransform } from './helpers';

import { type IGridLayoutProps } from './types';
import { useScssTheme } from '../../../utils/scss/useTheme';

const DEFAULT_COMPONENT = 'div';

/**
 * Grid layout component
 */
const GridComponent = <P extends ElementType = 'div'>(
    {
        as: ComponentProp,
        cols = 12,
        gap = scale(3),
        rows,
        justify,
        align,

        className,
        children,
        ...props
    }: IGridLayoutProps<P>,
    ref: Ref<P>,
) => {
    const Component = ComponentProp || DEFAULT_COMPONENT;

    const {
        components: {
            gridLayout: { index: styles },
        },
    } = useScssTheme();

    const gridTemplateColumns = useCSSProperty({
        value: cols,
        transform: colsTransform,
    });

    const gridTemplateRows = useCSSProperty({
        value: rows,
        transform: rowsTransform,
    });

    const gridGap = useCSSProperty({
        value: gap,
        transform: gapTransform,
    });

    const justifyContent = useCSSProperty({
        value: justify,
    });

    const alignItems = useCSSProperty({
        value: align,
    });

    const propArray = useMemo(() => {
        const properties = [];

        if (gridTemplateColumns) properties.push({ name: 'cols', value: gridTemplateColumns });
        if (gridTemplateRows) properties.push({ name: 'rows', value: gridTemplateRows });
        if (gridGap) properties.push({ name: 'gap', value: gridGap });
        if (justifyContent) properties.push({ name: 'justify', value: justifyContent });
        if (alignItems) properties.push({ name: 'align', value: alignItems });

        return properties;
    }, [alignItems, gridGap, gridTemplateColumns, gridTemplateRows, justifyContent]);

    const { mediaStyles, vars } = useGenerateProperty({
        name: 'gridLayout',
        props: propArray,
        styles: styles,
    });

    return (
        <Component ref={ref} className={cn(styles.gridLayout, mediaStyles, className)} style={vars} {...props}>
            {children}
        </Component>
    );
};

const GridLayout = forwardRef(GridComponent) as typeof GridComponent;

export { GridLayout };
