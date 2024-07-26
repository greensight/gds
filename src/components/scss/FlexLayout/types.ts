import { type HTMLProps, type ReactNode } from 'react';

import { type AllowMedia, type ValueType } from '../../../types/scss/Layout';

type DirectionType = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';

export interface IFlexLayoutProps extends Omit<HTMLProps<HTMLDivElement>, 'children' | 'align' | 'wrap'> {
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
