import { ElementType, ForwardRefExoticComponent, type HTMLProps, type ReactNode } from 'react';
import { MergeElementProps } from '../../../types/Utils';

export interface IContainerBaseProps extends HTMLProps<HTMLDivElement> {
    /** Container content. */
    children: ReactNode;
}

export type IContainerProps<P extends ElementType = 'div'> = {
    /**
     *  Element
     * @default "div"
     */
    as?: P | ForwardRefExoticComponent<P>;
} & MergeElementProps<P, Omit<IContainerBaseProps, 'as'>>;
