import React, { forwardRef } from 'react';

import cn from 'classnames';

import { type IContainerProps } from './types';
import { useScssTheme } from '../../../utils/scss/useTheme';

/**
 * Component for creating main page container with `layout` theme parameters.
 */
const Container = forwardRef<HTMLDivElement, IContainerProps>(({ children, className, ...props }, ref) => {
    const {
        components: { container: styles },
    } = useScssTheme();
    return (
        <div className={cn(styles.container, className)} ref={ref} {...props}>
            {children}
        </div>
    );
});

export { Container };
