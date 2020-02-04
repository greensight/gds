import * as React from 'react';
import useTheme from '../../utils/useTheme';
import typography from '../../utils/typography';
import scale from '../../utils/scale';
import baseTheme from '../../helpers/baseTheme';
import cloneElement from '../../helpers/cloneElement';
import { IButton } from './Button';

export const Button: React.FC<IButton> = (
    {
        children,
        theme = 'primary',
        size = 'md',
        block = false,
        Icon,
        iconAfter = false,
        hidden = false,
        type = 'button',
        href,
        as,
        external = false,
        onClick,
        themeObj,
        css,
        ...props
    },
    ref,
) => {
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components && globalTheme.components.Button ? globalTheme : baseTheme;
    const buttonTheme = themeObj || usedTheme.components.Button;

    if (!buttonTheme.themes[theme]) {
        console.warn(`Specify "${theme}" theme. Default values are used instead`);
    }

    if (!buttonTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name, defaultValue) => {
        const themeStyles = buttonTheme.themes[theme];
        let themeRule;
        if (themeStyles) themeRule = themeStyles[name];

        const sizeStyles = buttonTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = buttonTheme.base;
        const baseRule = baseStyles && baseStyles[name];

        return themeRule || sizeRule || baseRule || defaultValue;
    };

    const getStateStyles = (name, css) => {
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

    const hiddenStyles = {
        fontSize: 0,
        ...(round && {
            borderRadius: '50%',
            padding: `${pv}px ${(height - iconSize - borderWidth) / 2}px`,
        }),
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
        buttonTheme.base && buttonTheme.base.css,
        buttonTheme.sizes[size] && buttonTheme.sizes[size].css,
        buttonTheme.themes[theme] && buttonTheme.themes[theme].css,
        block && blockStyles,
        hidden && hiddenStyles,
        css,
    ];

    const Component = href ? 'a' : as || 'button';

    const marginRule = `margin${!iconAfter ? 'Right' : 'Left'}`;
    const iconProps = {
        css: {
            [marginRule]: !hidden ? iconOffset : undefined,
            width: iconSize,
            height: iconSize,
        },
    };

    let IconComponent;
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
            rel={external ? 'noopener' : null}
            onClick={onClick}
            css={styles}
            ref={ref}
            {...props}
        >
            {Icon && !iconAfter && IconComponent}
            {children}
            {Icon && iconAfter && IconComponent}
        </Component>
    );
};

export default React.forwardRef(Button);
