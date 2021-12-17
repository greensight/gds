import React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import { typography } from '../../utils/typography';
import { scale } from '../../utils/scale';
import { baseTheme } from '../../utils/baseTheme';
import { useComponentTheme } from '../../helpers/useComponentTheme';
import { VisuallyHidden } from '../../components/VisuallyHidden';
import { ButtonTheme, ButtonThemeProperties, ButtonSizeProperties, ButtonStateProperties } from '../../types/Button';
import { ComponentStates, SVGRIcon, RequiredBy, MergeElementProps } from '../../types/Utils';
import { TypographyProperties } from '../../types/Typography';

export interface ButtonBaseProps {
    /** Button content. */
    children: React.ReactNode;
    /** Theme name from list of themes defined in theme object at `components.Button.themes`. */
    theme?: string;
    /** Size name from list of sizes defined in theme object at `components.Button.sizes`. */
    size?: string;
    /** Block type. Use 100% of parent width. */
    block?: boolean;
    /** Icon. Accepts SVGR icon or custom JSX. */
    Icon?: SVGRIcon;
    /** Place icon after text. */
    iconAfter?: boolean;
    /** Visually hidden text. Keeps text accessible but visually shows only icons. Doesn't make sense without `Icon` prop. */
    hidden?: boolean;
    /** Open link in another browser tab. Additionaly adds `rel="nofollow noopener"`. */
    external?: boolean;
    /** Button theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __theme?: ButtonTheme;
    /** Additional CSS. */
    css?: CSSObject;
}

export type ButtonProps<P extends React.ElementType = 'button'> = {
    /** Use your own React component for render. Main usage: pass `a` for external links or pass `Link` from `react-router` for routes management. */
    as?: P;
} & MergeElementProps<P, ButtonBaseProps>;

/**
 * Button component.
 *
 * Renders <button /> or <a /> (pass `href`) or any custom element (pass `as`).
 *
 * Define themes and sizes in theme object (`components.Button`) and use them as `theme` / `size` prop values.
 */
export const Btn = <T extends React.ElementType = 'button'>(
    {
        children,
        theme = 'primary',
        size = 'md',
        block = false,
        Icon,
        iconAfter = false,
        hidden = false,
        type = 'button',
        as,
        external = false,
        __theme,
        css,
        ...props
    }: ButtonProps<T>,
    ref: React.Ref<HTMLButtonElement>,
) => {
    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('Button', __theme);
    const buttonTheme = componentTheme as ButtonTheme;
    if (!buttonTheme.themes[theme]) console.warn(`Specify "${theme}" theme. Default values are used instead`);
    if (!buttonTheme.sizes[size]) console.warn(`Specify "${size}" size. Default values are used instead`);

    /* Get theme default state properties and merge them with default values. */
    const themeProperties = getThemeProperties(buttonTheme, theme, 'default');
    const sizeProperties = buttonTheme.sizes[size];
    const themeDefaults = {
        borderWidth: themeProperties.border ? 1 : 0,
        borderStyle: 'solid',
        time: 200,
        easing: 'ease',
        color: baseTheme.colors.white,
        bg: baseTheme.colors.black,
    };
    const tp: RequiredBy<ButtonThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };
    const sizeDefaults = {
        height: scale(6),
        padding: scale(3),
        iconSize: scale(3),
        iconOffset: scale(1),
    };
    const sp: RequiredBy<ButtonSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties for default state. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);
    const pv = getVerticalPaddings(
        typographyName ? usedTheme.typography?.styles[typographyName]?.desktop : undefined,
        sp,
        tp,
        !!Icon,
    );
    const borderRadius = !tp.half ? tp.borderRadius : sp.height / 2;
    const padding = `${pv}px ${sp.padding}px`;
    const transition = getTransition(tp.time, tp.easing);
    const defaultCSS: CSSObject = {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        ...typographyCSS,
        borderRadius,
        padding,
        transition,
        ...getStateCSS(tp),
        ...sp.css,
    };

    /* Define CSS rules from theme properties for other states. */
    const themeHoverProperties = getThemeProperties(buttonTheme, theme, 'hover');
    const themeActiveProperties = getThemeProperties(buttonTheme, theme, 'active');
    const themeDisabledProperties = getThemeProperties(buttonTheme, theme, 'disabled');
    const themeFocusProperties = getThemeProperties(buttonTheme, theme, 'focus');
    const statesCSS: CSSObject = {
        ':hover': {
            ...getStateCSS(themeHoverProperties),
            ...(tp.timeIn && {
                transition: getTransition(tp.timeIn, tp.easing),
            }),
        },
        ':active': getStateCSS(themeActiveProperties),
        ':disabled': {
            ...getStateCSS(themeDisabledProperties),
            cursor: 'not-allowed',
        },
        ':focus': getStateCSS(themeFocusProperties),
    };

    /* Build CSS object combined with rules from props. */
    const blockStyles = { display: 'flex', width: '100%' };
    const hiddenRoundStyles = {
        borderRadius: '50%',
        padding: `${pv}px ${(sp.height - sp.iconSize - tp.borderWidth) / 2}px`,
    };
    const styles = [defaultCSS, statesCSS, block && blockStyles, hidden && tp.round && hiddenRoundStyles, css];

    /* Define CSS rules for icon. */
    const marginRule = `margin${!iconAfter ? 'Right' : 'Left'}`;
    const iconCSS = {
        [marginRule]: !hidden ? sp.iconOffset : undefined,
        width: sp.iconSize,
        height: sp.iconSize,
    };

    return jsx(
        as || 'button',
        {
            ref,
            type: !as || as === 'button' ? type : null,
            target: external ? '_blank' : null,
            rel: external ? 'nofollow noopener' : null,
            css: styles,
            ...props,
        },
        <>
            {Icon && !iconAfter && <Icon css={iconCSS} />}
            {hidden ? <VisuallyHidden>{children}</VisuallyHidden> : children}
            {Icon && iconAfter && <Icon css={iconCSS} />}
        </>,
    );
};

const getStateCSS = ({ color, bg, border, shadow, css }: ButtonStateProperties) => ({
    color,
    fill: color,
    background: bg,
    borderColor: border,
    boxShadow: shadow,
    ...css,
});

const getThemeProperties = (
    buttonTheme: ButtonTheme,
    theme: string,
    state: ComponentStates | 'default',
): ButtonThemeProperties | ButtonStateProperties => {
    const themeProperties = buttonTheme.themes[theme][state];
    const baseProperties = buttonTheme.base?.[state];
    return { ...baseProperties, ...themeProperties };
};

const getVerticalPaddings = (
    typographyProperties: TypographyProperties | undefined,
    sizeProperties: ButtonSizeProperties,
    themeProperties: ButtonThemeProperties,
    isIcon: boolean,
) => {
    const cssRule = sizeProperties.css;
    let fontSize = 16;
    let lineHeight = 1.4;

    if (typographyProperties) {
        fontSize = parseFloat(typographyProperties.fontSize) * 16;
        lineHeight = typographyProperties.lineHeight;
    } else if (cssRule) {
        if (cssRule.fontSize) {
            if (typeof cssRule.fontSize === 'number') {
                fontSize = cssRule.fontSize;
            } else if (typeof cssRule.fontSize === 'string') {
                if (cssRule.fontSize.endsWith('rem')) {
                    fontSize = parseFloat(cssRule.fontSize) * 16;
                } else {
                    fontSize = parseFloat(cssRule.fontSize);
                }
            }
        }
        if (cssRule.lineHeight && typeof cssRule.lineHeight === 'number') lineHeight = cssRule.lineHeight;
    }

    const textHeight = Math.floor(fontSize * lineHeight);
    const iconSize = sizeProperties.iconSize as number;
    const height = sizeProperties.height as number;
    const borderWidth = themeProperties.borderWidth as number;
    const maxHeight = Math.max(textHeight, isIcon ? iconSize : 0);
    const verticalPaddings = (height - maxHeight - borderWidth * 2) / 2;

    return verticalPaddings;
};

const getTransition = (time: number, easing: string) =>
    ['color', 'fill', 'background-color', 'border-color', 'box-shadow']
        .map((name) => `${name} ${easing} ${time}ms`)
        .join(', ');

export const Button = React.forwardRef(Btn) as typeof Btn;
