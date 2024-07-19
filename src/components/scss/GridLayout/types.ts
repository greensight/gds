import { type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia, type ValueType } from '../../../types/scss/Layout';

import { type IGridLayoutItemProps } from './components/Item/types';

type DirectionType = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';

export interface IGridLayoutProps extends Omit<HTMLProps<HTMLDivElement>, 'children' | 'align' | 'cols' | 'rows'> {
    /** Columns settings. */
    cols?: AllowMedia<ValueType>;
    rows?: AllowMedia<ValueType>;
    /** Gaps settings. */
    gap?: AllowMedia<ValueType>;
    justify?: AllowMedia<DirectionType>;
    align?: AllowMedia<DirectionType>;
    children: ReactNode;
}

export interface IGridLayoutPageProps extends Omit<IGridLayoutProps, 'children'> {}
export interface IGridLayoutItemPageProps extends Omit<IGridLayoutItemProps, 'children'> {}
