import { jsx } from '@emotion/react';
import React, { ElementType, Ref, forwardRef, useMemo } from 'react';

import { EnumLike, useThemeCSS } from '../../../helpers/emotion/theming';
import type { ButtonProps, ButtonStateFull, ButtonTheme } from './types';

/**
 * Button component.
 *
 * Renders <button /> or <a /> (pass `href`) or any custom element (pass `as`).
 *
 * Usage with themes:
 * @example
 * enum Variants {
 *  primary = 'primary',
 * }
 * enum Sizes {
 *  sm = 'sm',
 * }
 * const Button = createButtonWithTheme<typeof Variants, typeof Sizes>();
 * const Test = () => (
 *  <Button
 *   as="a"
 *   href="#"
 *   variant="primary"
 *   theme={{
 *    button: {},
 *    icon: {},
 *   }}
 *  >
 *   Content
 * </Button>
 *);
 */
export const BaseButton = <V extends EnumLike, S extends EnumLike, Typography, T extends ElementType = 'button'>(
    {
        children,
        block = false,
        size,
        theme,
        variant,
        Icon,
        iconAfter = false,
        hidden = false,
        type = 'button',
        as,
        external = false,
        disabled = false,
        rounded = true,
        css,
        typography,
        wrap = false,
        getTypographyCSS,
        ...props
    }: ButtonProps<V, S, Typography, T>,
    ref: Ref<HTMLButtonElement>,
) => {
    const hasChildren = !!children;
    const state = useMemo<ButtonStateFull<V, S, Typography>>(
        () => ({
            disabled,
            hasChildren,
            hidden,
            size,
            variant,
            block,
            iconAfter,
            rounded,
            typography,
            wrap,
        }),
        [disabled, hasChildren, hidden, size, variant, block, iconAfter, rounded, typography, wrap],
    );

    if (!theme) {
        throw new Error('[Button] theme is required');
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { button: totalCSS, icon: iconCSS } = useThemeCSS(theme!, state);

    const icon = Icon ? <Icon css={iconCSS} /> : null;

    return jsx(
        as || 'button',
        {
            ref,
            type: !as || as === 'button' ? type : null,
            target: external ? '_blank' : null,
            rel: external ? 'nofollow noopener' : null,
            css: [totalCSS, typography && getTypographyCSS ? getTypographyCSS(typography) : {}, css],
            disabled,
            ...props,
        },
        <>
            {icon && !iconAfter && icon}
            {hidden ? '' : children}
            {icon && iconAfter && icon}
        </>,
    );
};

const ButtonRef = forwardRef(BaseButton) as typeof BaseButton;

/**
 * Proxy component setting initial values for theme, variant, and size for button in the used project.
 */
export const createButtonWithTheme = <V extends EnumLike, S extends EnumLike, Typography>(
    defaultTheme: ButtonTheme<V, S, Typography>,
    defaultVariant: V | keyof V,
    defaultSize: S | keyof S,
    getTypographyCSS: ButtonProps<V, S, Typography>['getTypographyCSS'],
) => {
    type ButtonReturn = ReturnType<typeof ButtonRef>;

    // as any нужны т.к. в новых версиях ts ругается в целом на такой компонент
    const renderThemedButton = ((
        { theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props },
        ref,
    ) => (
        <ButtonRef
            ref={ref}
            getTypographyCSS={getTypographyCSS}
            theme={theme as any}
            variant={variant as any}
            size={size as any}
            {...(props as any)}
        />
    )) as <T extends React.ElementType<any> = 'button'>(
        props: ButtonProps<V, S, Typography, T>,
        ref: Ref<HTMLButtonElement>,
    ) => ButtonReturn;

    (renderThemedButton as any).displayName = 'Button';

    return forwardRef(renderThemedButton) as typeof renderThemedButton;
};

export type { ButtonProps, ButtonBaseProps, ButtonState, ButtonTheme } from './types';
