import { ElementType, type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia, type ValueType } from '../../../../../types/scss/Layout';
import { MergeElementProps } from '../../../../../types/Utils';

type DirectionType = 'start' | 'end' | 'center' | 'stretch';

export interface IGridLayoutItemBaseProps extends HTMLProps<HTMLDivElement> {
    /** Item content. */
    children?: ReactNode;
    /** Column settings. */
    col?: AllowMedia<ValueType>;
    /** Row settings. */
    row?: AllowMedia<ValueType>;
    /** Main axis self alignment. */
    justify?: AllowMedia<DirectionType>;
    /** Cross axis self alignment. */
    align?: AllowMedia<DirectionType>;
    /** Order. */
    order?: AllowMedia<number>;
}

export type IGridLayoutItemProps<P extends ElementType = 'div'> = {
    /**
     *  Element
     * @default "div"
     */
    as?: P;
} & MergeElementProps<P, Omit<IGridLayoutItemBaseProps, 'as'>>;
