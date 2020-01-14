import * as React from 'react';
import useTheme from '../../scripts/useTheme';
import baseTheme from '../../scripts/baseTheme';
import major from '../../scripts/major';
import typography from '../../scripts/typography';
import IButton from './Button';

// TODO Разделить timeIn и timeOut
// TODO Разобраться с передачей fill/stroke. Обработать случай с различными цветами текста и иконки
// TODO Добавить forwardRef
// TODO Реализовать link или отказаться от этой идеи
// TODO Фокус круглым аутлайном нереализуем
// TODO Что делать с размерами иконки? Фиксируя размеры снаружи нельзя задать скейлы/автокит
// TODO Что делать с вертикальным выравниванием иконки?
// TODO Как задать цвет иконки, если она может быть и fill и stroke?
// TODO Придумать враппер для компонентов, чтобы не давать всем кнопкам маржины
// TODO Подумать как можно позволить играться с темами со стороны Storybook
// TODO Стили ссылок конфликтуют с базовыми. Переопределять все?
// TODO Добавить иконку из токенов, внести плюс в токены
// TODO Добавить сторис про мультилайн

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
    css,
    ...props
}) => {
    const themeObj = useTheme();
    const buttonTheme = themeObj.button || baseTheme.app.button;

    const { borderWidth = 1, borderStyle = 'solid', time = 200, ...globalCss } = buttonTheme.global;
    const baseStyles = {
        textAlign: 'center',
        borderWidth,
        borderStyle,
        transition: `color ease ${time}ms, fill ease ${time}ms, background-color ease ${time}ms, border-color ease ${time}ms`,
        ...globalCss,
    };

    const { sizes } = buttonTheme;
    const { pt = 16, pb = 18, ph = major(2), iconOffset = major(1), typography: typographyName } = sizes[size];
    const sizeStyles = {
        padding: `${pt}px ${ph}px ${pb}px`,
        ...typography(typographyName, themeObj.button ? themeObj : baseTheme.app),
    };

    const { themes } = buttonTheme;
    const { color, bg = 'transparent', border = 'transparent', hover, active, disabled, focus, ...themeCss } = themes[
        theme
    ];
    const themeStyles = {
        color,
        fill: color,
        background: bg,
        borderColor: border,
        ':hover': getStateStyles(hover),
        ':active': active ? getStateStyles(active) : getStateStyles(hover),
        ':disabled': {
            cursor: 'not-allowed',
            ...getStateStyles(disabled),
        },
        ':focus': getStateStyles(focus),
        ...themeCss,
    };

    const blockStyles = {
        display: 'block',
        width: '100%',
    };

    const styles = [baseStyles, sizeStyles, themeStyles, block && blockStyles, hidden && { fontSize: 0 }, css];

    let Component = 'button';
    if (href) {
        Component = 'a';
    } else if (as) {
        Component = as;
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
            {Icon && !iconAfter && <Icon css={{ marginRight: !hidden ? iconOffset : undefined }} />}
            {children}
            {Icon && iconAfter && <Icon css={{ marginLeft: !hidden ? iconOffset : undefined }} />}
        </Component>
    );
};

const getStateStyles = state => {
    if (!state) return;
    const { color, bg: background, border: borderColor, ...stateCss } = state;
    return {
        color,
        fill: color,
        background,
        borderColor,
        ...stateCss,
    };
};

export default Button;
