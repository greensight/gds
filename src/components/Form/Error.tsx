import * as React from 'react';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import typography from '../../utils/typography';
import { useFormField } from './Field';
import { useForm } from '.';

export const FormError: React.FC<IFormError> = ({ err, css, ...props }) => {
    const { size } = useFormField();
    const { themeObj } = useForm();
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form.Error ? globalTheme : baseTheme;
    const errorTheme = themeObj?.Error ? themeObj.Error : usedTheme.components.Form.Error;

    if (!errorTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }
    const getRule = (name, defaultValue) => {
        const sizeStyles = errorTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = errorTheme.base;
        const baseRule = baseStyles?.[name];

        return sizeRule || baseRule || defaultValue;
    };
    const border = getRule('border');
    const borderWidth = getRule('borderWidth', border ? 1 : 0);
    const borderStyle = getRule('borderStyle', 'solid');
    const borderRadius = getRule('borderRadius');
    const typographyName = getRule('typography');
    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const marginTop = getRule('marginTop', scale(1));
    const color = getRule('color', baseTheme.colors.black);
    const bg = getRule('bg', baseTheme.colors.white);
    const styles = [
        {
            display: 'block',
            color: errorTheme.color,
            marginTop,
            borderWidth,
            borderStyle,
            borderRadius,
            ...typographyStyles,
            color,
            background: bg,
            borderColor: border,
        },
        errorTheme.sizes?.[size]?.css,
        css,
    ];

    return (
        <span css={styles} {...props}>
            {err}
        </span>
    );
};

export default FormError;
