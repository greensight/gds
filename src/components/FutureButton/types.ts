import { CSSObject } from '@emotion/react';
import { ElementType, FC, ReactNode } from 'react';

import { BaseThemeState, EnumLike, StyleDefinition } from '../../helpers/theming';
import { MergeElementProps, SVGRIcon } from '../../types/Utils';

export interface ButtonState {
    hidden: boolean;
    disabled: boolean;
    hasChildren: boolean;
    block: boolean;
    iconAfter: boolean;
    rounded: boolean;
}

export type ButtonStateFull<V extends EnumLike, S extends EnumLike> = BaseThemeState<V, S> & ButtonState;

export interface ButtonTheme<V extends EnumLike, S extends EnumLike> {
    button: StyleDefinition<ButtonStateFull<V, S>>;
    icon: StyleDefinition<ButtonStateFull<V, S>>;
}

export interface ButtonBaseProps<V extends EnumLike, S extends EnumLike>
    extends Partial<BaseThemeState<V, S, ButtonTheme<V, S>>>,
        Partial<ButtonState> {
    /** Button content. */
    children?: ReactNode;
    /** Block type. Use 100% of parent width. */
    block?: boolean;
    /** Icon. Accepts SVGR icon or custom JSX. */
    Icon?: SVGRIcon | FC<any>;
    /** Place icon after text. */
    iconAfter?: boolean;
    /** Visually hidden text. Keeps text accessible but visually shows only icons. Doesn't make sense without `Icon` prop. */
    hidden?: boolean;
    /** Open link in another browser tab. Additionaly adds `rel="nofollow noopener"`. */
    external?: boolean;
    /** Additional CSS. */
    css?: CSSObject;
}

export type ButtonProps<V extends EnumLike, S extends EnumLike, P extends ElementType = 'button'> = {
    /** Use your own React component for render. Main usage: pass `a` for external links or pass `Link` from `react-router` for routes management. */
    as?: P;
} & MergeElementProps<P, ButtonBaseProps<V, S>>;

export default ButtonProps;
