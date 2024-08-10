import { ElementType, type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia, type ValueType } from '../../../types/scss/Layout';
import { MergeElementProps } from '../../../types/Utils';
import { IFlexLayoutItemProps } from './components/Item/types';

type DirectionType = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';

export interface IFlexLayoutBaseProps extends Omit<HTMLProps<HTMLDivElement>, 'children' | 'align' | 'wrap'> {
    /** gap settings */
    gap?: AllowMedia<ValueType>;
    /** Main axis alignment. */
    justify?: AllowMedia<DirectionType>;
    /** Cross axis alignment. */
    align?: AllowMedia<DirectionType>;
    /** Multiline mode. */
    wrap?: AllowMedia<boolean>;
    /** children */
    children: ReactNode;
}

export type IFlexLayoutProps<P extends ElementType = 'div'> = {
    /**
     *  Element
     * @default "div"
     */
    as?: P;
} & MergeElementProps<P, Omit<IFlexLayoutBaseProps, 'as'>>;

export interface IFlexLayoutPageProps extends Omit<IFlexLayoutProps, 'children'> {}
export interface IFlexLayoutItemPageProps extends Omit<IFlexLayoutItemProps, 'children'> {}
