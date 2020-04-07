import * as React from 'react';
import scale from '../../utils/scale';
import { CSSObject } from '@emotion/core';
import baseTheme from '../../utils/baseTheme';
import typography from '../../utils/typography';
import { useFormField } from './useFormField';
import useComponentTheme from '../../helpers/useComponentTheme';
import { FormErrorTheme, FormErrorThemeProperties, FormErrorSizeProperties } from '../../types/Form';
import { RequiredBy } from '../../types/Utils';

export interface FormErrorProps extends React.HTMLProps<HTMLSpanElement> {
    /** Error text. */
    err: string;
    /** Additional CSS. */
    css?: CSSObject;
}

/**
 * FormError component.
 *
 * Inner component for error message. Use in `Form.Input` or `Form.Label` (by default).
 *
 */

export const FormError = ({ err, css, ...props }: FormErrorProps) => {
    const { size } = useFormField();

    const { componentTheme, usedTheme } = useComponentTheme('FormError');
    const errorTheme = componentTheme as FormErrorTheme;

    if (!errorTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }
    const sizeDefaults = {};
    const sizeProperties = errorTheme.sizes[size];
    const sp: RequiredBy<FormErrorSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);

    const themeProperties = getThemeProperties(errorTheme);

    const themeDefaults = {
        color: baseTheme.colors.error,
    };

    const tp: RequiredBy<FormErrorThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const defaultCSS: CSSObject = {
        display: 'block',
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        color: tp.color,
        backgroundColor: tp.bg,
        borderColor: tp.border,
        boxShadow: tp.shadow,
        marginTop: scale(1),
        ...typographyCSS,
        borderRadius: tp.borderRadius,
        ...tp.css,
        ...sp.css,
    };
    const styles = [defaultCSS, css];

    return (
        <span css={styles} {...props}>
            {err}
        </span>
    );
};

const getThemeProperties = (formErrorTheme: FormErrorTheme): FormErrorThemeProperties => {
    const themeProperties = formErrorTheme?.base;
    return { ...themeProperties };
};

export default FormError;
