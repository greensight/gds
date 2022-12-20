import { CSSObject } from '@emotion/react';
import React from 'react';

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
    /** Additional CSS. */
    css?: CSSObject;
}

/**
 * Component for creating page sections.
 */
export const Section: React.FC<SectionProps> = ({ children, container = true, mb, pv, pt, pb, bg, css, ...props }) => {
    return (
        <section
            css={[
                useCSSProperty({ name: 'marginBottom', props: { mb } }),
                useCSSProperty({ name: 'paddingTop', props: { pv, pt }, transform: ({ pv, pt }) => pv ?? pt }),
                useCSSProperty({ name: 'paddingBottom', props: { pv, pb }, transform: ({ pv, pb }) => pv ?? pb }),
                useCSSProperty({ name: 'background', props: { bg } }),
                css,
            ]}
            {...props}
        >
            {container ? <Container>{children}</Container> : children}
        </section>
    );
};
