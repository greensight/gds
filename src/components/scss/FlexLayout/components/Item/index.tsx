import React, { type FC, useMemo } from 'react';

import cn from 'classnames';

import { useCSSProperty } from '../../../../../helpers/scss/useCSSProperty';
import { useGenerateProperty } from '../../../../../helpers/scss/useGenerateProperty';

import { type IFlexLayoutItemProps } from './types';
import { useScssTheme } from '../../../../../utils/scss/useTheme';
import { orderTransform } from './helpers';

/**
 * Flex layout item component
 */
export const FlexLayoutItem: FC<IFlexLayoutItemProps> = ({
    justify,
    align,
    order,

    className,
    children,
    ...props
}) => {
    const {
        styles: {
            flexLayout: { item: styles },
        },
    } = useScssTheme();

    const justifySelf = useCSSProperty({
        value: justify,
    });

    const alignSelf = useCSSProperty({
        value: align,
    });

    const flexOrder = useCSSProperty({ value: order, transform: orderTransform });

    const propArray = useMemo(() => {
        const properties = [];
        if (justifySelf) {
            properties.push({ name: 'justify', value: justifySelf });
        }
        if (alignSelf) {
            properties.push({ name: 'align', value: alignSelf });
        }
        if (flexOrder) {
            properties.push({ name: 'order', value: flexOrder });
        }

        return properties;
    }, [alignSelf, justifySelf, flexOrder]);

    const { mediaStyles, vars } = useGenerateProperty({
        props: propArray,
        name: 'flexLayoutItem',
        styles,
    });

    return (
        <div className={cn(styles.flexLayoutItem, mediaStyles, className)} style={vars} {...props}>
            {children}
        </div>
    );
};
