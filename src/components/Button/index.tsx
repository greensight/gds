import * as React from 'react';
import useTheme from '../../scripts/useTheme';
import baseTheme from '../../scripts/baseTheme';
import major from '../../scripts/major';
import typography from '../../scripts/typography';
import cloneElement from '../../scripts/cloneElement';
import IButton from './Button';

// TODO Разделить timeIn и timeOut
// TODO Добавить forwardRef
// TODO Придумать враппер для компонентов, чтобы не давать всем кнопкам маржины
// TODO Подумать как можно позволить играться с темами со стороны Storybook
// TODO Стили ссылок конфликтуют с базовыми. Переопределять все?
// TODO Добавить сторис про мультилайн

// TODO Что делать с размерами иконки? Фиксируя размеры снаружи нельзя задать скейлы/автокит. Кнопка диктует размеры - iconSize
// TODO Сменить иконку на токеновую после правки fill (удаления из импортируемого файла)
// TODO Импортированные из Фигмы иконки идут с зашитым филлом - нужно чистить
// TODO Нам на фронте не нужно 3 иконки разных размеров, если мы можем их заскейлить
// TODO Добавить borderRadius - зависит от size
// TODO Убрать дублирование css для иконок
// TODO Убрать lift - он для теста (ну или доработать, если нужен)

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

    const { borderWidth = 1, borderStyle = 'solid', time = 200, lift = true, ...globalCss } = buttonTheme.global;
    const baseStyles = {
        // display: 'inline-block',
        // textAlign: 'center',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth,
        borderStyle,
        transition: `color ease ${time}ms, fill ease ${time}ms, background-color ease ${time}ms, border-color ease ${time}ms`,
        ...globalCss,
    };

    const { sizes } = buttonTheme;
    const {
        height = major(6),
        padding: ph = major(2),
        iconOffset = major(1),
        iconSize = 0,
        typography: typographyName,
        ...sizesCss
    } = sizes[size];
    const typographyStyles = typography(typographyName, themeObj.button ? themeObj : baseTheme.app);
    const fontSize = parseFloat(typographyStyles.fontSize, 10) * 16;
    const textHeight = Math.floor(fontSize * typographyStyles.lineHeight);
    const maxHeight = Math.max(textHeight, iconSize);
    const pv = (height - maxHeight - borderWidth * 2) / 2;
    // let pt = pv;
    // let pb = pv;
    // if (lift) {
    //     pt = Number.isInteger(pv) ? pv - 1 : Math.floor(pv);
    //     pb = Number.isInteger(pv) ? pv + 1 : Math.ceil(pv);
    // }
    const sizeStyles = {
        // padding: `${pt}px ${ph}px ${pb}px`,
        padding: `${pv}px ${ph}px`,
        ...typography(typographyName, themeObj.button ? themeObj : baseTheme.app),
        ...sizesCss,
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

    let iconProps;
    let IconComponent;
    if (Icon) {
        if (!iconAfter) {
            iconProps = {
                css: {
                    marginRight: !hidden ? iconOffset : undefined,
                    width: iconSize,
                    height: iconSize,
                    // position: 'relative',
                    // marginTop: '-4px',
                    // verticalAlign: 'middle',
                },
            };
        } else {
            iconProps = {
                css: {
                    marginLeft: !hidden ? iconOffset : undefined,
                    width: iconSize,
                    height: iconSize,
                    // marginTop: '-4px',
                    // verticalAlign: 'middle',
                },
            };
        }

        if (typeof Icon === 'function') {
            IconComponent = <Icon {...iconProps} />;
        } else if (typeof Icon === 'object') {
            IconComponent = cloneElement(Icon, iconProps);
        }
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
