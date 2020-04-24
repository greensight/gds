import * as React from 'react';
import { CSSObject } from '@emotion/core';
import baseTheme from '../../utils/baseTheme';
import typography from '../../utils/typography';
import useComponentTheme from '../../helpers/useComponentTheme';
import { FormErrorTheme, FormErrorThemeProperties, FormErrorSizeProperties } from '../../types/Form';
import { RequiredBy } from '../../types/Utils';

export interface FormErrorProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    /** Error text. */
    err: string;
    /** Size name from list of sizes defined in theme object at `components.FormLabel.sizes`. */
    size?: string;
    /** Error's positioning. */
    errorPosition?: 'top' | 'bottom';
    /** Visually hidden label. Keeps text accessible. */
    hiddenLegend?: boolean;
    /** Label theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __errorTheme?: FormErrorTheme;
}

/**
 * FormError component.
 *
 * Inner component for error message. Use in `Form.Input` or `Form.Label` (by default).
 *
 */

export const FormError = ({
    err,
    size = 'md',
    errorPosition = 'top',
    hiddenLegend = false,
    __errorTheme,
    ...props
}: FormErrorProps) => {
    const { componentTheme, usedTheme } = useComponentTheme('FormError', __errorTheme);
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
        borderWidth: themeProperties.border ? 1 : 0,
        borderStyle: 'solid',
        color: baseTheme.colors.black,
    };

    const tp: RequiredBy<FormErrorThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const styles: CSSObject = {
        display: 'block',
        padding: sp.padding,
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        color: tp.color,
        backgroundColor: tp.bg,
        borderColor: tp.border,
        boxShadow: tp.shadow,
        marginTop: (errorPosition === 'top' && !hiddenLegend) || errorPosition === 'bottom' ? sp.topGap : undefined,
        ...typographyCSS,
        borderRadius: tp.borderRadius,
        textAlign: tp.textAlign,
        ...tp.css,
        ...sp.css,
    };

    return (
        <span css={styles} {...props}>
            {err}
        </span>
    );
};

const getThemeProperties = (formErrorTheme: FormErrorTheme): FormErrorThemeProperties => {
    const themeProperties = formErrorTheme.theme;
    return { ...themeProperties };
};

export default FormError;
