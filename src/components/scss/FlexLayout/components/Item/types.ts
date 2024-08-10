import { ElementType, type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia } from '../../../../../types/scss/Layout';
import { MergeElementProps } from '../../../../../types/Utils';

type DirectionType = 'start' | 'end' | 'center' | 'stretch';

export interface IFlexLayoutItemBaseProps extends HTMLProps<HTMLDivElement> {
    /** Item content. */
    children?: ReactNode;
    /** Main axis self alignment. */
    justify?: AllowMedia<DirectionType>;
    /** Cross axis self alignment. */
    align?: AllowMedia<DirectionType>;
    /** Order. */
    order?: AllowMedia<number>;
}

export type IFlexLayoutItemProps<P extends ElementType = 'div'> = {
    /**
     *  Element
     * @default "div"
     */
    as?: P;
} & MergeElementProps<P, Omit<IFlexLayoutItemBaseProps, 'as'>>;
