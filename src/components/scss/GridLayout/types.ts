import { ElementType, ForwardRefExoticComponent, type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia, type ValueType } from '../../../types/scss/Layout';

import { type IGridLayoutItemProps } from './components/Item/types';
import { MergeElementProps } from '../../../types/Utils';

type DirectionType = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';

export interface IGridLayoutBaseProps extends Omit<HTMLProps<HTMLDivElement>, 'children' | 'align' | 'cols' | 'rows'> {
    /** Columns settings. */
    cols?: AllowMedia<ValueType>;
    /** rows settings */
    rows?: AllowMedia<ValueType>;
    /** Gaps settings. */
    gap?: AllowMedia<ValueType>;
    /** Main axis alignment. */
    justify?: AllowMedia<DirectionType>;
    /** Cross axis alignment. */
    align?: AllowMedia<DirectionType>;
    children: ReactNode;
}

export type IGridLayoutProps<P extends ElementType = 'div'> = {
    /**
     *  Element
     * @default "div"
     */
    as?: P | ForwardRefExoticComponent<P>;
} & MergeElementProps<P, Omit<IGridLayoutBaseProps, 'as'>>;

export interface IGridLayoutPageProps extends Omit<IGridLayoutProps, 'children'> {}
export interface IGridLayoutItemPageProps extends Omit<IGridLayoutItemProps, 'children'> {}
