import React from 'react';
import { CSSObject } from '@emotion/core';
import typography from '@utils/typography';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import useComponentTheme from '@helpers/useComponentTheme';
import cloneElement from '@helpers/cloneElement';
import VisuallyHidden from '@components/VisuallyHidden';
import ButtonTheme, { ButtonThemeProperties, ButtonSizeProperties, ButtonStateProperties } from '@typings/Button.d';
import { ComponentStates } from '@typings/Types.d';
import { TypographyProperties } from '@typings/Typography.d';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'size'> {
    /** Button content. */
    children: React.ReactNode;
    /** Theme name from list of themes defined in theme object at `components.Button.themes`. */
    theme?: string;
    /** Size name from list of sizes defined in theme object at `components.Button.sizes`. */
    size?: string;
    /** Block type. Use 100% of parent width. */
    block?: boolean;
    /** Icon. Accepts SVGR icon or custom JSX. */
    Icon?: SVGRIcon | React.ReactNode;
    /** Place icon after text. */
    iconAfter?: boolean;
    /** Visually hidden text. Keeps text accessible but visually shows only icons. Doesn't make sense without `Icon` prop. */
    hidden?: boolean;
    /** Link address. If passed renders anchor element instead of button. */
    href?: string;
    /** Use your own React component for render. Main usage: pass `Link` from `react-router` for routes management. */
    as?: React.ReactNode;
    /** Open link in another browser tab. Additionaly adds `rel="nofollow noopener"`. */
    external?: boolean;
    /** Button theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __theme?: ButtonTheme;
    /** Additional CSS. */
    css?: CSSObject;
}

/**
 * Button component.
 *
 * Renders <button /> or <a /> (pass `href`) or any custom element (pass `as`).
 *
 * Define themes and sizes in theme object (`components.Button`) and use them as `theme` / `size` prop values.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            theme = 'primary',
            size = 'md',
            block = false,
            Icon,
            iconAfter = false,
            hidden = false,
            type = 'button' as const,
            href,
            as,
            external = false,
            onClick,
            __theme,
            css,
            ...props
        },
        ref,
    ) => {
        /* Get theme objects. */
        const { componentTheme, usedTheme } = useComponentTheme('Button', __theme);
        const buttonTheme = componentTheme as ButtonTheme;
        if (!buttonTheme.themes[theme]) console.warn(`Specify "${theme}" theme. Default values are used instead`);
        if (!buttonTheme.sizes[size]) console.warn(`Specify "${size}" size. Default values are used instead`);

        /* Get theme properties. */
        const themeProperties = getThemeProperties(buttonTheme, theme, 'default');
        const sizeProperties = buttonTheme.sizes[size];

        /* Merge theme properties with default values. */
        const themeDefaults = {
            borderWidth: themeProperties.border ? 1 : 0,
            time: 200,
            easing: 'ease',
            color: baseTheme.colors.white,
            bg: baseTheme.colors.black,
        };
        const themePropertiesWithDefaults: RequiredBy<ButtonThemeProperties, keyof typeof themeDefaults> = {
            ...themeDefaults,
            ...themeProperties,
        };
        const sizeDefaults = {
            height: scale(6),
            padding: scale(3),
            iconSize: scale(3),
            iconOffset: scale(1),
        };
        const sizePropertiesWithDefaults: RequiredBy<ButtonSizeProperties, keyof typeof sizeDefaults> = {
            ...sizeDefaults,
            ...sizeProperties,
        };

        /* Define CSS rules from theme properties for default state. */
        const typographyName = sizePropertiesWithDefaults.typography;
        const typographyCSS = typography(typographyName, usedTheme);
        const pv = getVerticalPaddings(
            typographyName ? usedTheme.typography?.styles[typographyName].desktop : undefined,
            sizePropertiesWithDefaults,
            themePropertiesWithDefaults,
            !!Icon,
        );
        const borderRadius = !themePropertiesWithDefaults.half
            ? themePropertiesWithDefaults.borderRadius
            : sizePropertiesWithDefaults.height / 2;
        const padding = `${pv}px ${sizePropertiesWithDefaults.padding}px`;
        const transition = getTransition(themePropertiesWithDefaults.time, themePropertiesWithDefaults.easing);
        const defaultCSS: CSSObject = {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: themePropertiesWithDefaults.borderWidth,
            borderStyle: themePropertiesWithDefaults.borderStyle,
            ...typographyCSS,
            borderRadius,
            padding,
            transition,
            ...getStateCSS(themePropertiesWithDefaults),
            ...sizePropertiesWithDefaults.css,
        };

        /* Define CSS rules from theme properties for other states. */
        const themeHoverProperties = getThemeProperties(buttonTheme, theme, 'hover');
        const themeActiveProperties = getThemeProperties(buttonTheme, theme, 'active');
        const themeDisabledProperties = getThemeProperties(buttonTheme, theme, 'disabled');
        const themeFocusProperties = getThemeProperties(buttonTheme, theme, 'focus');
        const statesCSS: CSSObject = {
            ':hover': {
                ...getStateCSS(themeHoverProperties),
                ...(themePropertiesWithDefaults.timeIn && {
                    transition: getTransition(themePropertiesWithDefaults.timeIn, themePropertiesWithDefaults.easing),
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
            padding: `${pv}px ${
                (sizePropertiesWithDefaults.height -
                    sizePropertiesWithDefaults.iconSize -
                    themePropertiesWithDefaults.borderWidth) /
                2
            }px`,
        };
        const styles = [
            defaultCSS,
            statesCSS,
            block && blockStyles,
            hidden && themePropertiesWithDefaults.round && hiddenRoundStyles,
            css,
        ];

        /* Define component and icon component tags. */
        const Component: any = href ? 'a' : as || 'button';
        const marginRule = `margin${!iconAfter ? 'Right' : 'Left'}`;
        const iconProps = {
            css: {
                [marginRule]: !hidden ? sizePropertiesWithDefaults.iconOffset : undefined,
                width: sizePropertiesWithDefaults.iconSize,
                height: sizePropertiesWithDefaults.iconSize,
            },
        };
        let IconComponent = null;
        if (typeof Icon === 'function') {
            IconComponent = <Icon {...iconProps} />;
        } else if (typeof Icon === 'object') {
            IconComponent = cloneElement(Icon, iconProps);
        }

        return (
            <Component
                type={!href && !as ? type : null}
                href={href}
                target={external ? '_blank' : null}
                rel={external ? 'nofollow noopener' : null}
                onClick={onClick}
                css={styles}
                ref={ref}
                {...props}
            >
                {Icon && !iconAfter && IconComponent}
                {hidden ? <VisuallyHidden>{children}</VisuallyHidden> : children}
                {Icon && iconAfter && IconComponent}
            </Component>
        );
    },
);

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

export default Button;
