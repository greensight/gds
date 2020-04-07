import React from 'react';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import FormTheme, {
    FormLabelTheme,
    FormLabelThemeProperties,
    FormLabelSizeProperties,
    FormLabelStateProperties,
    FormValidationIconProperties,
} from '../../types/Form';
import scale from '../../utils/scale';
import { CSSObject } from '@emotion/core';
import typography from '../../utils/typography';
import VisuallyHidden from '../../components/VisuallyHidden';
import { MAJOR_STEP } from '../../helpers/constants';
import { useField } from 'formik';
import { useForm } from './useForm';
import { useFormField } from './useFormField';
import { FormError } from './Error';
import { FormHint } from './Hint';
import { ComponentStates, SVGRIcon, RequiredBy } from '../../types/Utils';

export interface FormLabelProps extends React.HTMLProps<HTMLLabelElement> {
    /** Icon after text. Accepts SVGR icon or custom JSX. */
    IconAfter?: SVGRIcon;
    /** Icon before text. Accepts SVGR icon or custom JSX. */
    IconBefore?: SVGRIcon;
    /** Label content. */
    children: React.ReactNode;
    /** Additional CSS. */
    css?: CSSObject;
}

export const FormLabel = ({ IconBefore, IconAfter, children, css, ...props }: FormLabelProps) => {
    const { controlId, optional, size, hint, hintPosition, hiddenLabel, validationPosition } = useFormField();
    const { errorPosition, required, ErrorIcon, showSuccess, SuccessIcon } = useForm();

    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('FormLabel');
    const labelTheme = componentTheme as FormLabelTheme;

    const optionalTheme = labelTheme.optional;
    const markTheme = labelTheme.mark;

    const [, meta] = useField(controlId);

    if (!labelTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }
    const themeProperties = getThemeProperties(labelTheme, 'default');
    const themeDefaults = {
        color: baseTheme.colors.black,
        fill: baseTheme.colors.black,
        time: 200,
        easing: 'ease',
    };
    const tp: RequiredBy<FormLabelThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const sizeProperties = labelTheme.sizes[size];
    const sizeDefaults = {
        iconSize: scale(3),
    };
    const sp: RequiredBy<FormLabelSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties for default state. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);

    const transition = getTransition(tp.time, tp.easing);
    const defaultCSS: CSSObject = {
        display: 'block',
        marginBottom: hiddenLabel ? undefined : scale(1),
        ...typographyCSS,
        transition,
        ...getStateCSS(tp),
        ...sp.css,
    };

    /* Define CSS rules from theme properties for other states. */
    const themeHoverProperties = getThemeProperties(labelTheme, 'hover');
    const statesCSS: CSSObject = {
        ':hover': {
            ...getStateCSS(themeHoverProperties),
            ...(tp.timeIn && {
                transition: getTransition(tp.timeIn, tp.easing),
            }),
        },
    };

    /* Define CSS rules from theme properties for validation states. */
    const themeErrorProperties = getThemeProperties(labelTheme, 'error');
    const themeSuccessProperties = getThemeProperties(labelTheme, 'success');
    const validationCSS: CSSObject = {
        ...(meta.touched && meta.error && getStateCSS(themeErrorProperties)),
        ...(meta.touched && !meta.error && showSuccess && getStateCSS(themeSuccessProperties)),
    };

    const styles = [defaultCSS, statesCSS, validationCSS, css];

    const textStyles: CSSObject = {
        position: 'relative',
        display: 'block',
        paddingRight: IconAfter || validationPosition === 'labelAfter' ? `${sp.iconSize + MAJOR_STEP}px` : undefined,
        paddingLeft:
            IconBefore ||
            (validationPosition === 'labelBefore' && meta.touched && meta.error) ||
            (validationPosition === 'labelBefore' && meta.touched && !meta.error && showSuccess)
                ? `${sp.iconSize + MAJOR_STEP}px`
                : undefined,
    };

    /* Define CSS rules from theme properties for optional text. */
    const optionalDefaultStyles: CSSObject = {
        fontWeight: 400,
        fontSize: '0.8em',
    };
    const themeOptionalProperties = getAdditionalProperty(labelTheme, 'optional');
    const optionalStyles = [optionalDefaultStyles, getStateCSS(themeOptionalProperties), optionalTheme?.css];

    /* Define CSS rules from theme properties for mark. */
    const markDefaultStyles: CSSObject = {
        color: baseTheme.colors.error,
    };
    const themeMarkProperties = getAdditionalProperty(labelTheme, 'mark');
    const markStyles = [markDefaultStyles, getStateCSS(themeMarkProperties), markTheme?.css];

    const iconAfterCSS: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        right: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };

    const iconBeforeCSS: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        left: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };

    let validationIconHorizontalRule;

    if (validationPosition === 'labelBefore') {
        validationIconHorizontalRule = 'left';
    } else {
        validationIconHorizontalRule = 'right';
    }
    const { componentTheme: componentFormTheme } = useComponentTheme('Form');
    const formTheme = componentFormTheme as FormTheme;
    const iconErrorDefaultStyles: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        [validationIconHorizontalRule]: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };
    const errorIconProperties = getIconProperty(formTheme, 'errorIcon');
    const iconErrorStyles = [iconErrorDefaultStyles, getIconCSS(errorIconProperties), formTheme.errorIcon?.css];

    const iconSuccessDefaultStyles: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        [validationIconHorizontalRule]: 0,
        width: sp.iconSize,
        height: sp.iconSize,
    };
    const successIconProperties = getIconProperty(formTheme, 'successIcon');
    const iconSuccessStyles = [iconSuccessDefaultStyles, getIconCSS(successIconProperties), formTheme.successIcon?.css];

    const labelTextStyles: CSSObject = {
        display: 'inline-block',
    };

    const labelProps = {
        name: controlId,
        ...props,
    };

    return (
        <label htmlFor={labelProps.name} css={styles} {...props}>
            <span css={textStyles}>
                {hiddenLabel ? (
                    <VisuallyHidden>{children}</VisuallyHidden>
                ) : (
                    <span css={labelTextStyles}>{children}</span>
                )}
                {IconBefore &&
                    !hiddenLabel &&
                    !(validationPosition === 'labelBefore' && meta.touched && meta.error) &&
                    !(validationPosition === 'labelBefore' && meta.touched && !meta.error && showSuccess) && (
                        <IconBefore css={iconBeforeCSS} />
                    )}

                {IconAfter &&
                    !hiddenLabel &&
                    !(validationPosition === 'labelAfter' && meta.touched && meta.error) &&
                    !(validationPosition === 'labelAfter' && meta.touched && !meta.error && showSuccess) && (
                        <IconAfter css={iconAfterCSS} />
                    )}

                {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                    meta.touched &&
                    meta.error &&
                    !hiddenLabel &&
                    ErrorIcon && <ErrorIcon css={iconErrorStyles} />}
                {(validationPosition === 'labelAfter' || validationPosition === 'labelBefore') &&
                    meta.touched &&
                    !meta.error &&
                    showSuccess &&
                    !hiddenLabel &&
                    SuccessIcon && <SuccessIcon css={iconSuccessStyles} />}
                {optional && required === 'optional' && !hiddenLabel && <span css={optionalStyles}>{optional}</span>}
                {optional && required === 'optional' && hiddenLabel && <VisuallyHidden>{optional}</VisuallyHidden>}
                {!optional && required === 'mark' && !hiddenLabel && (
                    <span css={markStyles} aria-hidden="true">
                        *
                    </span>
                )}
            </span>
            {hint && hintPosition === 'top' && (hiddenLabel ? <VisuallyHidden>{hint}</VisuallyHidden> : <FormHint />)}
            {meta.error && meta.touched && errorPosition === 'top' && <FormError err={meta.error} />}
        </label>
    );
};

const getStateCSS = ({ color, fill, css }: FormLabelStateProperties) => ({
    color,
    fill,
    ...css,
});

const getThemeProperties = (
    labelTheme: FormLabelTheme,
    state: ComponentStates | 'success' | 'error' | 'default',
): FormLabelThemeProperties | FormLabelStateProperties => {
    const themeProperties = labelTheme.base[state];
    return { ...themeProperties };
};

const getAdditionalProperty = (labelTheme: FormLabelTheme, property: 'optional' | 'mark'): FormLabelThemeProperties => {
    const themeProperties = labelTheme[property];
    return { ...themeProperties };
};

const getIconProperty = (formTheme: FormTheme, property: 'successIcon' | 'errorIcon'): FormValidationIconProperties => {
    const themeProperties = formTheme[property];
    return { ...themeProperties };
};

const getIconCSS = ({ fill, css }: FormValidationIconProperties) => ({
    fill,
    ...css,
});

const getTransition = (time: number, easing: string) =>
    ['color', 'fill'].map((name) => `${name} ${easing} ${time}ms`).join(', ');

export default FormLabel;
