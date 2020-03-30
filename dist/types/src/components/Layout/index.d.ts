import React from 'react';
import { CSSObject } from '@emotion/core';
import { LayoutContextProps } from './useLayout';
import { LayoutItemProps } from './Item';
import { AllowMedia } from '../../types/Types';
export interface LayoutCompositionProps {
    Item: React.FC<LayoutItemProps>;
}
export interface LayoutProps extends LayoutContextProps, Omit<React.HTMLProps<HTMLDivElement>, 'cols' | 'rows' | 'type' | 'wrap'> {
    /** Layout items list. */
    children: React.ReactNode;
    /** Inline mode. Changes `display` type.*/
    inline?: AllowMedia<boolean>;
    /** Rows. For grids only. */
    rows?: AllowMedia<number | string | (number | string)[]>;
    /** Areas. For grids only. */
    areas?: AllowMedia<string | string[]>;
    /** Main axis alignment. */
    justify?: AllowMedia<'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'>;
    /** Cross axis alignment. */
    align?: AllowMedia<'start' | 'end' | 'center' | 'stretch'>;
    /** Auto rows size. For grids only. */
    autoRows?: AllowMedia<number | string | (number | string)[]>;
    /** Auto cols size. For grids only. */
    autoCols?: AllowMedia<number | string | (number | string)[]>;
    /** Main axis direction. */
    direction?: AllowMedia<'row' | 'column'>;
    /** Dense mode. For grids only. */
    dense?: AllowMedia<boolean>;
    /** Reverse directions. For flex only. */
    reverse?: AllowMedia<boolean>;
    /** Multiline mode. For flex only. */
    wrap?: AllowMedia<boolean>;
    /** Additional CSS. */
    css?: CSSObject;
}
export declare const Layout: React.FC<LayoutProps> & LayoutCompositionProps;
export default Layout;
