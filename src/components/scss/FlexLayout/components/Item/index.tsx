import React, { ElementType, useMemo } from 'react';

import cn from 'classnames';

import { useCSSProperty } from '../../../../../helpers/scss/useCSSProperty';
import { useGenerateProperty } from '../../../../../helpers/scss/useGenerateProperty';

import { type IFlexLayoutItemProps } from './types';
import { useScssTheme } from '../../../../../utils/scss/useTheme';
import { orderTransform } from './helpers';

const DEFAULT_COMPONENT = 'div';

/**
 * Flex layout item component
 */
export const FlexLayoutItem = <P extends ElementType = 'div'>({
    as: ComponentProp,
    justify,
    align,
    order,

    className,
    children,
    ...props
}: IFlexLayoutItemProps<P>) => {
    const Component = ComponentProp || DEFAULT_COMPONENT;
    const {
        components: {
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
        <Component className={cn(styles.flexLayoutItem, mediaStyles, className)} style={vars} {...props}>
            {children}
        </Component>
    );
};
