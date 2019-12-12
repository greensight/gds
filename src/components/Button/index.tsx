import * as React from 'react';
import { useTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { space, color, typography, layout, border, position, shadow } from 'styled-system';

const Button: React.FC<IButton> = ({
    children,
    onClick,
    variant = 'default',
    bordered = false,
    size = 'medium',
    block = false,
    css,
    ...props
}) => {
    const styles = useStyles({ size, variant, bordered, block });
    const Component = styled('button')(styles, css, space, color, typography, layout, border, position, shadow);

    return (
        <Component type="button" onClick={onClick} {...props}>
            {children}
        </Component>
    );
};

const useStyles = ({ size, variant, bordered, block }) => {
    const theme = useTheme().app;
    const { disabled, borderWidth, time } = theme.button;

    const baseStyles = {
        textAlign: 'center',
        borderWidth,
        borderStyle: 'solid',
        transition: `color ease ${time}, background-color ease ${time}, border-color ease ${time}`,
    };

    const { height, padding, fontSize } = theme.button.sizes[size];
    const sizesStyles = {
        lineHeight: `${height - borderWidth}px`,
        padding: `0 ${padding}px`,
        fontSize,
    };

    const { color, colorActive, bg, bgActive, borderColor, borderColorActive } = theme.button.variants[variant];
    const variantStyles = {
        color,
        backgroundColor: bg,
        borderColor,
        ':hover': {
            color: colorActive,
            backgroundColor: bgActive,
            borderColor: borderColorActive,
        },
    };

    const borderStyles = {
        borderColor,
        color: bg,
        backgroundColor: 'transparent',
        ':hover': {
            color: variant === 'default' ? colorActive : bgActive,
            borderColor: borderColorActive,
        },
    };

    const blockStyles = {
        display: 'block',
        width: '100%',
    };

    const disabledStyles = {
        ':disabled': {
            color: disabled.color,
            backgroundColor: disabled.bg,
            borderColor: disabled.borderColor,
            cursor: 'not-allowed',
        },
    };

    return {
        ...baseStyles,
        ...sizesStyles,
        ...variantStyles,
        ...(bordered && borderStyles),
        ...(block && blockStyles),
        ...disabledStyles,
    };
};

export default Button;
