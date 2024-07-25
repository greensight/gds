import { type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia } from '../../../../../types/scss/Layout';

type DirectionType = 'start' | 'end' | 'center' | 'stretch';

export interface IFlexLayoutItemProps extends HTMLProps<HTMLDivElement> {
    /** Item content. */
    children?: ReactNode;
    /** Main axis self alignment. */
    justify?: AllowMedia<DirectionType>;
    /** Cross axis self alignment. */
    align?: AllowMedia<DirectionType>;
    /** Order. */
    order?: AllowMedia<number>;
}
