import React from 'react';
import { CSSObject } from '@emotion/core';
import { AllowMedia } from '../../types/Types';
export interface LayoutItemProps extends React.HTMLProps<HTMLDivElement> {
    /** Item content. */
    children?: React.ReactNode;
    /** Column settings. */
    col?: AllowMedia<number | [number, number] | string>;
    /** Row settings. For grids only. */
    row?: AllowMedia<number | [number, number] | string>;
    /** Area name. For grids only. */
    area?: AllowMedia<string>;
    /** Main axis self alignment. For grids only. */
    justify?: AllowMedia<'start' | 'end' | 'center' | 'stretch'>;
    /** Cross axis self alignment. */
    align?: AllowMedia<'start' | 'end' | 'center' | 'stretch'>;
    /** Order. */
    order?: AllowMedia<number>;
    /** Expand on all available space. For flex only.  */
    grow?: AllowMedia<boolean | number>;
    /** Additional CSS. */
    css?: CSSObject;
}
export declare const Item: ({ children, col, row, area, justify, align, order, grow, css, ...props }: LayoutItemProps) => JSX.Element;
export default Item;
