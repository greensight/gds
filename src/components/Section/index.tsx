import * as React from 'react';
import Container from '../Container';
import ISection from './Section';

const Section: React.FC<ISection> = ({ children, container = false, bg, mb, pv, pt, pb, ...props }) => (
    <section
        css={{
            marginBottom: mb,
            paddingTop: pv || pt,
            paddingBottom: pv || pb,
            backgroundColor: bg,
        }}
        {...props}
    >
        {container ? <Container>{children}</Container> : children}
    </section>
);

export default Section;
