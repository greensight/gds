import React from 'react';
import { CSSObject } from '@emotion/core';
import { AllowMedia } from '../../types/Types';
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
 * Component for page sections.
 */
export declare const Section: ({ children, container, mb, pv, pt, pb, bg, css, ...props }: SectionProps) => JSX.Element;
export default Section;
