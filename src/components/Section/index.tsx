import React from 'react';
import styled from '@emotion/styled';
import Container from '../Container';

const Section = ({ children, container = false, bg = '#fff', mb, pv, pt, pb, css }) => {
    const Component = styled('section')(
        {
            marginBottom: mb,
            paddingTop: pv || pt,
            paddingBottom: pv || pb,
            backgroundColor: bg,
        },
        css,
    );

    return <Component>{container ? <Container>{children}</Container> : children}</Component>;
};

export default Section;
