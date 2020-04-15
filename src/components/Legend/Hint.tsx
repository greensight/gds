import React from 'react';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import { CSSObject } from '@emotion/core';
import { FormHintTheme, FormHintThemeProperties, FormHintSizeProperties } from '../../types/Form';
import typography from '../../utils/typography';
import { useFormField } from '../Form/useFormField';
import { useLegend } from './useLegend';
import { RequiredBy } from '../../types/Utils';
import scale from '../../utils/scale';

export type FormHintProps = React.HTMLProps<HTMLSpanElement>;

/**
 * FormHint component.
 *
 * Inner component for hint. Use in `Form.Input` or `Form.Label` (by default).
 */
export const FormHint = ({ ...props }: FormHintProps) => {
    const size = useFormField()?.size ?? useLegend()?.size;
    const hint = useFormField()?.hint ?? useLegend()?.hint;
    const hintPosition = useFormField()?.hintPosition || 'top';
    const { hiddenLegend } = useLegend();

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

    const styles: CSSObject = {
        display: 'block',
        marginTop: (hintPosition === 'top' && !hiddenLegend) || hintPosition === 'bottom' ? scale(1) : undefined,
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
