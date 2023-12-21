import React, { FC, HTMLProps, useMemo } from 'react';

import { useCSSProperty } from '../../helpers/useCSSProperty';
import { AllowMedia } from '../../types/Layout';
import { Container } from '../Container';

export interface SectionProps extends HTMLProps<HTMLDivElement> {
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
export const Section: FC<SectionProps> = ({
    children,
    container = true,
    mb,
    pv: pvProp,
    pt: ptProp,
    pb: pbProp,
    bg,
    css,
    ...props
}) => {
    const background = useCSSProperty({ name: 'background', props: { bg } });
    const marginBottom = useCSSProperty({ name: 'marginBottom', props: { mb } });
    const paddingTop = useCSSProperty({
        name: 'paddingTop',
        props: { pv: pvProp, pt: ptProp },
        transform: ({ pv, pt }) => pv ?? pt,
    });
    const paddingBottom = useCSSProperty({
        name: 'paddingBottom',
        props: { pv: pvProp, pb: pbProp },
        transform: ({ pv, pb }) => pv ?? pb,
    });

    const sectionCss = useMemo(
        () => [background, marginBottom, paddingBottom, paddingTop, css],
        [background, marginBottom, paddingBottom, paddingTop, css],
    );

    return (
        <section css={sectionCss} {...props}>
            {container ? <Container>{children}</Container> : children}
        </section>
    );
};
