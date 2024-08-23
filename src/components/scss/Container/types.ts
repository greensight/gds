import { type HTMLProps, type ReactNode } from 'react';

export interface IContainerProps extends HTMLProps<HTMLDivElement> {
    /** Container content. */
    children: ReactNode;
}
