import { type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia, type ValueType } from '../../../../../types/scss/Layout';

type DirectionType = 'start' | 'end' | 'center' | 'stretch';

export interface IGridLayoutItemProps extends HTMLProps<HTMLDivElement> {
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
