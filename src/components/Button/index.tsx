import * as React from 'react';
import useTheme from '../../scripts/useTheme';
import baseTheme from '../../scripts/baseTheme';
import major from '../../scripts/major';
import typography from '../../scripts/typography';
import cloneElement from '../../scripts/cloneElement';
import { IButton } from './Button';

// TODO Добавить forwardRef
// TODO Придумать враппер для компонентов, чтобы не давать всем кнопкам маржины
// TODO Стили ссылок конфликтуют с базовыми. Переопределять все?

const Button: React.FC<IButton> = ({
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
    themeObj: propThemeObj,
    css,
    ...props
}) => {
    const globalTheme = useTheme();
    const themeObj = globalTheme.button ? globalTheme : baseTheme.app;
    const buttonTheme = propThemeObj || themeObj.button;

    const getRule = (name, defaultValue) =>
        buttonTheme.themes[theme][name] || buttonTheme.sizes[size][name] || buttonTheme.base[name] || defaultValue;

    const getStateStyles = (name, css) => {
        const state = getRule(name);
        if (!state) return;
        const { color, bg, border, css: stateCss } = state;
        return {
            [`:${name}`]: {
                color,
                fill: color,
                background: bg,
                borderColor: border,
                ...stateCss,
                ...css,
            },
        };
    };

    const border = getRule('border');
    const borderWidth = getRule('borderWidth', border ? 1 : 0);
    const borderStyle = getRule('borderStyle', 'solid');
    const borderRadius = getRule('borderRadius');
    const time = getRule('time', 200);
    const timeIn = getRule('timeIn');
    const typographyName = getRule('typography');
    const height = getRule('height', major(6));
    const padding = getRule('padding', major(3));
    const iconSize = getRule('iconSize', major(3));
    const iconOffset = getRule('iconOffset', major(1));
    const color = getRule('color', baseTheme.app.colors.white);
    const bg = getRule('bg', baseTheme.app.colors.black);

    const typographyStyles = typography(typographyName, themeObj);
    const { fontSize = '1rem', lineHeight = 1.4 } = typographyStyles || buttonTheme.sizes[size];
    const parsedFontSize = parseFloat(fontSize) * 16;
    const textHeight = Math.floor(parsedFontSize * lineHeight);
    const maxHeight = Math.max(textHeight, Icon ? iconSize : 0);
    const pv = (height - maxHeight - borderWidth * 2) / 2;

    const transition = time =>
        `color ease ${time}ms, fill ease ${time}ms, background-color ease ${time}ms, border-color ease ${time}ms`;

    const blockStyles = { display: 'flex', width: '100%' };

    const hiddenStyles = { fontSize: 0 };

    const styles = [
        {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth,
            borderStyle,
            borderRadius,
            padding: `${pv}px ${padding}px`,
            ...typographyStyles,
            color,
            fill: color,
            background: bg,
            borderColor: border,
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
        buttonTheme.base.css,
        buttonTheme.sizes[size].css,
        buttonTheme.themes[theme].css,
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
            {...props}
        >
            {Icon && !iconAfter && IconComponent}
            {children}
            {Icon && iconAfter && IconComponent}
        </Component>
    );
};

export default Button;
