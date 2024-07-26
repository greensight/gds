import React, { forwardRef } from 'react';

import { type ISectionProps } from './types';
import { Container } from '../Container';

/**
 * Component for creating page sections.
 */
const Section = forwardRef<HTMLDivElement, ISectionProps>(({ container = true, children, ...props }, ref) => (
    <section ref={ref} {...props}>
        {container ? <Container>{children}</Container> : children}
    </section>
));

export { Section };
