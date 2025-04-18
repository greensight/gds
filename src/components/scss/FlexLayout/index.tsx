import React, { ElementType, forwardRef, Ref, useMemo } from 'react';

import cn from 'classnames';

import { useCSSProperty } from '../../../helpers/scss/useCSSProperty';
import { useGenerateProperty } from '../../../helpers/scss/useGenerateProperty';

import { scale } from '../../../utils/common/scale';

import { gapTransform } from './helpers';

import { type IFlexLayoutProps } from './types';
import { useScssTheme } from '../../../utils/scss/useTheme';
import { Breakpoint } from '../../../types/scss/Layout';

export { FlexLayoutItem } from './components/Item';

const DEFAULT_COMPONENT = 'div';
/**
 * Flex layout component
 */
const FlexComponent = <P extends ElementType = 'div'>(
    { as: ComponentProp, gap = scale(3), justify, align, className, children, wrap, ...props }: IFlexLayoutProps<P>,
    ref: Ref<P>,
) => {
    const Component = ComponentProp || DEFAULT_COMPONENT;
    const {
        components: {
            flexLayout: { index: styles },
        },
    } = useScssTheme();

    const flexGap = useCSSProperty({
        value: gap,
        transform: gapTransform,
    });

    const justifyContent = useCSSProperty({
        value: justify,
    });

    const alignItems = useCSSProperty({
        value: align,
    });

    const wrapValue = useMemo(() => {
        if (typeof wrap === 'boolean') return wrap ? 'wrap' : 'nowrap';
        if (!wrap) return;
        return (Object.keys(wrap) as (keyof typeof wrap)[]).reduce(
            (acc, key) => {
                const value = wrap[key];
                acc[key] = value ? 'wrap' : 'nowrap';
                return acc;
            },
            {} as Record<Breakpoint, string>,
        );
    }, [wrap]);

    const flexWrap = useCSSProperty({
        value: wrapValue,
    });

    const propArray = useMemo(() => {
        const properties = [];

        if (flexGap) properties.push({ name: 'gap', value: flexGap });
        if (justifyContent) properties.push({ name: 'justify', value: justifyContent });
        if (alignItems) properties.push({ name: 'align', value: alignItems });
        if (flexWrap) properties.push({ name: 'wrap', value: flexWrap });

        return properties;
    }, [alignItems, flexGap, flexWrap, justifyContent]);

    const { mediaStyles, vars } = useGenerateProperty({
        props: propArray,
        name: 'flexLayout',
        styles,
    });

    return (
        <Component ref={ref} className={cn(styles.flexLayout, mediaStyles, className)} style={vars} {...props}>
            {children}
        </Component>
    );
};

const FlexLayout = forwardRef(FlexComponent) as typeof FlexComponent;

export { FlexLayout };
