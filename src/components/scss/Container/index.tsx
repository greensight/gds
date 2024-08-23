import React, { ElementType, forwardRef, Ref } from 'react';

import cn from 'classnames';

import { type IContainerProps } from './types';
import { useScssTheme } from '../../../utils/scss/useTheme';

/**
 * Component for creating main page container with `layout` theme parameters.
 */
const ContainerComponent = <P extends ElementType = 'div'>(
    { children, className, ...props }: IContainerProps<P>,
    ref: Ref<P>,
) => {
    const {
        components: { container: styles },
    } = useScssTheme();
    return (
        <div className={cn(styles.container, className)} ref={ref} {...props}>
            {children}
        </div>
    );
};

const Container = forwardRef(ContainerComponent) as typeof ContainerComponent;
export { Container };
