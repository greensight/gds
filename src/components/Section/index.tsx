import * as React from 'react';
import Container from '../Container';
import useTheme from '../../utils/useTheme';
import useCSSProperty from '../../helpers/useCSSProperty';
import ISection from './Section';

const Section: React.FC<ISection> = ({ children, container, mb, pv, pt, pb, bg, css, ...props }) => {
    const { layout } = useTheme();
    const hasContainer = container !== undefined ? container : !!layout.container;

    return (
        <section
            css={[
                useCSSProperty({
                    name: 'marginBottom',
                    value: mb,
                }),
                useCSSProperty({
                    name: 'paddingTop',
                    value: [pv, pt],
                    transform: ([pv, pt]) => pv || pt,
                }),
                useCSSProperty({
                    name: 'paddingBottom',
                    value: [pv, pb],
                    transform: ([pv, pb]) => pv || pb,
                }),
                useCSSProperty({
                    name: 'background',
                    value: bg,
                }),
                css,
            ]}
            {...props}
        >
            {hasContainer ? <Container>{children}</Container> : children}
        </section>
    );
};

export default Section;
