import React from 'react';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import { CSSObject } from '@emotion/core';
import { FormHintTheme, FormHintThemeProperties, FormHintSizeProperties } from '../../types/Form';
import typography from '../../utils/typography';
import { RequiredBy } from '../../types/Utils';
import scale from '../../utils/scale';

export interface FormHintProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    /** Hint text. */
    hint?: string;
    /** Size name from list of sizes defined in theme object at `components.FormLabel.sizes`. */
    size?: string;
    /** Error's positioning. */
    hintPosition?: 'top' | 'bottom';
    /** Visually hidden label. Keeps text accessible. */
    hiddenLegend?: boolean;
    /** Label theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __hintTheme?: FormHintTheme;
}

/**
 * FormHint component.
 *
 * Inner component for hint. Use in `Form.Input` or `Form.Label` (by default).
 */
export const FormHint = ({
    size = 'md',
    hint,
    __hintTheme,
    hintPosition = 'top',
    hiddenLegend = false,
    ...props
}: FormHintProps) => {
    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('FormHint', __hintTheme);

    const hintTheme = componentTheme as FormHintTheme;

    if (!hintTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const themeProperties = getThemeProperties(hintTheme);
    const themeDefaults = {
        color: baseTheme.colors.black,
        borderWidth: themeProperties.border ? 1 : 0,
        borderStyle: 'solid',
    };

    const tp: RequiredBy<FormHintThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const sizeProperties = hintTheme.sizes[size];
    const sizeDefaults = {
        padding: 0,
        topGap: scale(1),
    };
    const sp: RequiredBy<FormHintSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties. */
    const typographyName = sizeProperties.typography;
    const typographyCSS = typography(typographyName, usedTheme);

    const styles: CSSObject = {
        display: 'block',
        padding: sp.padding,
        marginTop: (hintPosition === 'top' && !hiddenLegend) || hintPosition === 'bottom' ? sp.topGap : undefined,
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        color: tp.color,
        backgroundColor: tp.bg,
        borderColor: tp.border,
        borderRadius: tp.borderRadius,
        boxShadow: tp.shadow,
        textAlign: tp.textAlign,
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
    const themeProperties = hintTheme.theme;
    return { ...themeProperties };
};

export default FormHint;
