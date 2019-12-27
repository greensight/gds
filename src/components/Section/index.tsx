import React from 'react';
import Container from '../Container';

const Section = ({ children, container = false, bg = '#fff', mb, pv, pt, pb, ...props }) => {
    return (
        <section
            css={[
                {
                    marginBottom: mb,
                    paddingTop: pv || pt,
                    paddingBottom: pv || pb,
                    backgroundColor: bg,
                },
            ]}
            {...props}
        >
            {container ? <Container>{children}</Container> : children}
        </section>
    );
};

export default Section;
