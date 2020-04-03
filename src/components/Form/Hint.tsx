import * as React from 'react';
import useTheme from '../../utils/useTheme';
import baseTheme from '../../utils/baseTheme';
import typography from '../../utils/typography';
import { useForm } from './useForm';
import { useFormField } from './useFormField';

export const FormHint: React.FC<IFormHint> = ({ ...props }) => {
    const { hint, size } = useFormField();
    const { themeObj } = useForm();
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Hint ? globalTheme : baseTheme;
    const hintTheme = themeObj?.Hint ? themeObj.Hint : usedTheme.components.Form.Hint;

    if (!hintTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name, defaultValue) => {
        const sizeStyles = hintTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];
        const baseStyles = hintTheme.base;
        const baseRule = baseStyles?.[name];

        return sizeRule || baseRule || defaultValue;
    };

    const border = getRule('border');
    const borderWidth = getRule('borderWidth', border ? 1 : 0);
    const borderStyle = getRule('borderStyle', 'solid');
    const borderRadius = getRule('borderRadius');
    const typographyName = getRule('typography');
    const color = getRule('color', baseTheme.colors.black);
    const bg = getRule('bg', baseTheme.colors.white);

    const typographyStyles = typographyName && typography(typographyName, usedTheme);

    const styles = [
        {
            display: 'block',
            borderWidth,
            borderStyle,
            borderRadius,
            ...typographyStyles,
            color,
            background: bg,
            borderColor: border,
        },
        hintTheme.base?.css,
        hintTheme.sizes?.[size]?.css,
    ];

    return (
        <span css={styles} {...props}>
            {hint}
        </span>
    );
};

export default FormHint;
