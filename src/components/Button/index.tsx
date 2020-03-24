import React from 'react';
import { CSSObject } from '@emotion/core';
import useTheme from '@utils/useTheme';
import typography from '@utils/typography';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import cloneElement from '@helpers/cloneElement';
import VisuallyHidden from '@components/VisuallyHidden';
import ButtonTheme from '../../typings/Button.d';

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
export const Button = (
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
    }: ButtonProps,
    ref: HTMLButtonElement,
) => {
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Button ? globalTheme : baseTheme;
    const buttonTheme = __theme || usedTheme.components.Button;

    if (!buttonTheme.themes[theme]) {
        console.warn(`Specify "${theme}" theme. Default values are used instead`);
    }

    if (!buttonTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name: string, defaultValue?: any) => {
        const themeStyles = buttonTheme.themes[theme];
        let themeRule;
        if (themeStyles) themeRule = themeStyles[name];

        const sizeStyles = buttonTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = buttonTheme.base;
        const baseRule = baseStyles?.[name];

        return themeRule || sizeRule || baseRule || defaultValue;
    };

    const getStateStyles = (name: string, css?: CSSObject) => {
        const state = getRule(name);
        if (!state) return;
        const { color, bg, border, shadow, css: stateCss } = state;
        return {
            [`:${name}`]: {
                color,
                fill: color,
                background: bg,
                borderColor: border,
                boxShadow: shadow,
                ...stateCss,
                ...css,
            },
        };
    };

    const getPv = typographyStyles => {
        let fontSize = '1rem';
        let lineHeight = 1.4;

        const cssRule = buttonTheme.sizes[size].css;

        if (typographyStyles) {
            fontSize = parseFloat(typographyStyles.fontSize) * 16;
            lineHeight = typographyStyles.lineHeight;
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

            if (cssRule.lineHeight) lineHeight = cssRule.lineHeight;
        }

        const textHeight = Math.floor(fontSize * lineHeight);
        const maxHeight = Math.max(textHeight, Icon ? iconSize : 0);
        const pv = (height - maxHeight - borderWidth * 2) / 2;

        return pv;
    };

    const transition = time =>
        ['color', 'fill', 'background-color', 'border-color', 'box-shadow']
            .map(name => `${name} ${easing} ${time}ms`)
            .join(', ');

    const border = getRule('border');
    const borderWidth = getRule('borderWidth', border ? 1 : 0);
    const borderStyle = getRule('borderStyle', 'solid');
    const borderRadius = getRule('borderRadius');
    const time = getRule('time', 200);
    const timeIn = getRule('timeIn');
    const easing = getRule('easing', 'ease');
    const typographyName = getRule('typography');
    const height = getRule('height', scale(6));
    const padding = getRule('padding', scale(3));
    const iconSize = getRule('iconSize', scale(3));
    const iconOffset = getRule('iconOffset', scale(1));
    const color = getRule('color', baseTheme.colors.white);
    const bg = getRule('bg', baseTheme.colors.black);
    const shadow = getRule('shadow');
    const round = getRule('round');
    const half = getRule('half');

    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const pv = getPv(typographyStyles);

    const blockStyles = { display: 'flex', width: '100%' };

    const roundStyles = {
        borderRadius: '50%',
        padding: `${pv}px ${(height - iconSize - borderWidth) / 2}px`,
    };

    const styles = [
        {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth,
            borderStyle,
            borderRadius: !half ? borderRadius : height / 2,
            padding: `${pv}px ${padding}px`,
            ...typographyStyles,
            color,
            fill: color,
            background: bg,
            borderColor: border,
            boxShadow: shadow,
            transition: transition(time),
            ...getStateStyles('hover', {
                ...(timeIn && { transition: transition(timeIn) }),
            }),
            ...getStateStyles('active'),
            ...getStateStyles('disabled', {
                cursor: 'not-allowed',
            }),
            ...getStateStyles('focus'),
        },
        buttonTheme.base?.css,
        buttonTheme.sizes?.[size]?.css,
        buttonTheme.themes?.[theme]?.css,
        block && blockStyles,
        hidden && round && roundStyles,
        css,
    ];

    const Component: any = href ? 'a' : as || 'button';

    const marginRule = `margin${!iconAfter ? 'Right' : 'Left'}`;
    const iconProps = {
        css: {
            [marginRule]: !hidden ? iconOffset : undefined,
            width: iconSize,
            height: iconSize,
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
};

export default React.forwardRef<HTMLButtonElement, ButtonProps>(Button);
