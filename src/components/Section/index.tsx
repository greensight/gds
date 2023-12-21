import { CSSObject } from '@emotion/react';
import React, { useMemo } from 'react';

import { Container } from '../../components/Container';
import { useCSSProperty } from '../../helpers/useCSSProperty';
import { AllowMedia } from '../../types/Layout';

export interface SectionProps extends React.HTMLProps<HTMLDivElement> {
    /** Section content. */
    children: React.ReactNode;
    /** Wrap content in container. */
    container?: boolean;
    /** Bottom offset. */
    mb?: AllowMedia<number>;
    /** Vertical paddings. */
    pv?: AllowMedia<number>;
    /** Top padding. */
    pt?: AllowMedia<number>;
    /** Bottom padding. */
    pb?: AllowMedia<number>;
    /** Background color. */
    bg?: AllowMedia<string>;
}

/**
 * Component for creating page sections.
 */
export const Section: React.FC<SectionProps> = ({ children, container = true, mb, pv, pt, pb, bg, css, ...props }) => {
    const marginBottom = useCSSProperty({ name: 'marginBottom', props: { mb } });
    const paddingTop = useCSSProperty({ name: 'paddingTop', props: { pv, pt }, transform: ({ pv, pt }) => pv ?? pt });
    const paddingBottom = useCSSProperty({
        name: 'paddingBottom',
        props: { pv, pb },
        transform: ({ pv, pb }) => pv ?? pb,
    });
    const background = useCSSProperty({ name: 'background', props: { bg } });

    const styles = useMemo(
        () => [marginBottom, paddingTop, paddingBottom, background, css],
        [background, css, marginBottom, paddingBottom, paddingTop],
    );

    return (
        <section css={styles} {...props}>
            {container ? <Container>{children}</Container> : children}
        </section>
    );
};
