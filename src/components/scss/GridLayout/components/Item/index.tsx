import React, { ElementType, useMemo } from 'react';

import cn from 'classnames';

import { useCSSProperty } from '../../../../../helpers/scss/useCSSProperty';
import { useGenerateProperty } from '../../../../../helpers/scss/useGenerateProperty';

import { colTransform, orderTransform, rowTransform } from './helpers';

import { type IGridLayoutItemProps } from './types';
import { useScssTheme } from '../../../../../utils/scss/useTheme';

const DEFAULT_COMPONENT = 'div';
/**
 * Grid layout item component
 */
const GridLayoutItem = <P extends ElementType = 'div'>({
    as: ComponentProp,
    col,
    row,
    justify,
    align,
    order,

    className,
    children,
    ...props
}: IGridLayoutItemProps<P>) => {
    const Component = ComponentProp || DEFAULT_COMPONENT;

    const {
        components: {
            gridLayout: { item: styles },
        },
    } = useScssTheme();

    const gridColumn = useCSSProperty({
        value: col,
        transform: colTransform,
    });

    const gridRow = useCSSProperty({
        value: row,
        transform: rowTransform,
    });

    const justifySelf = useCSSProperty({
        value: justify,
    });

    const alignSelf = useCSSProperty({
        value: align,
    });

    const gridOrder = useCSSProperty({
        value: order,
        transform: orderTransform,
    });

    const propArray = useMemo(() => {
        const properties = [];

        if (gridColumn) {
            properties.push({ name: 'col', value: gridColumn });
        }
        if (gridRow) {
            properties.push({ name: 'row', value: gridRow });
        }
        if (justifySelf) {
            properties.push({ name: 'justify', value: justifySelf });
        }
        if (alignSelf) {
            properties.push({ name: 'align', value: alignSelf });
        }
        if (gridOrder) {
            properties.push({ name: 'order', value: gridOrder });
        }

        return properties;
    }, [alignSelf, gridColumn, gridRow, justifySelf, gridOrder]);

    const { mediaStyles, vars } = useGenerateProperty({
        props: propArray,
        name: 'gridLayoutItem',
        styles,
    });

    return (
        <Component className={cn(styles.gridLayoutItem, mediaStyles, className)} style={vars} {...props}>
            {children}
        </Component>
    );
};

export { GridLayoutItem };
