import React, { forwardRef } from 'react';

import { type ISectionProps } from './types';
import { Container } from '../Container';

/**
 * Component for creating page sections.
 */
const Section = forwardRef<HTMLDivElement, ISectionProps>(
    ({ container = true, containerClassName, children, ...props }, ref) => (
        <section ref={ref} {...props}>
            {container ? <Container className={containerClassName}>{children}</Container> : children}
        </section>
    ),
);

export { Section };
