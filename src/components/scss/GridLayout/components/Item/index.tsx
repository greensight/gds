import React, { type FC, useMemo } from 'react';

import cn from 'classnames';

import { useCSSProperty } from '../../../../../helpers/scss/useCSSProperty';
import { useGenerateProperty } from '../../../../../helpers/scss/useGenerateProperty';

import { colTransform, rowTransform } from './helpers';
import styles from './styles.module.scss';
import { type IGridLayoutItemProps } from './types';

/**
 * Компонент айтема сетки на css гридах
 */
const GridLayoutItem: FC<IGridLayoutItemProps> = ({
    col,
    row,
    justify,
    align,
    order,

    className,
    children,
    ...props
}) => {
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
        <div className={cn(styles.gridLayoutItem, mediaStyles, className)} style={vars} {...props}>
            {children}
        </div>
    );
};

export { GridLayoutItem };
