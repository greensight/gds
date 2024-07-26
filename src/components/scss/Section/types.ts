import { type HTMLProps } from 'react';

export interface ISectionProps extends HTMLProps<HTMLDivElement> {
    /** Wrap content in container. */
    container?: boolean;
}
