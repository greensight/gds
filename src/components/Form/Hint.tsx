import React from 'react';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import { CSSObject } from '@emotion/core';
import { FormHintTheme, FormHintThemeProperties, FormHintSizeProperties } from '../../types/Form';
import typography from '../../utils/typography';
import { useFormField } from './useFormField';
import { RequiredBy } from '../../types/Utils';

export interface FormHintProps extends React.HTMLProps<HTMLSpanElement> {
    /** Additional CSS. */
    css?: CSSObject;
}

/**
 * FormHint component.
 *
 * Inner component for hint. Use in `Form.Input` or `Form.Label` (by default).
 */
export const FormHint = ({ css, ...props }: FormHintProps) => {
    const { size, hint } = useFormField();

    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('FormHint');
    const hintTheme = componentTheme as FormHintTheme;

    if (!hintTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const themeProperties = getThemeProperties(hintTheme);
    const themeDefaults = {
        color: baseTheme.colors.black,
        borderRadius: 0,
    };

    const tp: RequiredBy<FormHintThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const sizeProperties = hintTheme.sizes[size];
    const sizeDefaults = {};
    const sp: RequiredBy<FormHintSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties. */
    const typographyName = sizeProperties.typography;
    const typographyCSS = typography(typographyName, usedTheme);

    const defaultCSS: CSSObject = {
        display: 'block',
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        color: tp.color,
        backgroundColor: tp.bg,
        borderColor: tp.border,
        borderRadius: tp.borderRadius,
        ...typographyCSS,
        ...tp.css,
        ...sp.css,
    };
    const styles = [defaultCSS, css];
    return (
        <span css={styles} {...props}>
            {hint}
        </span>
    );
};

const getThemeProperties = (hintTheme: FormHintTheme): FormHintThemeProperties => {
    const themeProperties = hintTheme?.base;
    return { ...themeProperties };
};

export default FormHint;
