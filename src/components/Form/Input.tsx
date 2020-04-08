import React from 'react';
import scale from '../../utils/scale';
import { useField } from 'formik';
import { useForm } from './useForm';
import { useFormField } from './useFormField';
import { FormError } from './Error';
import { FormHint } from './Hint';
import { CSSObject } from '@emotion/core';
import typography from '../../utils/typography';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import FormTheme, {
    FormInputTheme,
    FormInputThemeProperties,
    FormInputSizeProperties,
    FormInputStateProperties,
    FormValidationIconProperties,
} from '../../types/Form';
import { ComponentStates, SVGRIcon, RequiredBy, MergeElementProps } from '../../types/Utils';

export interface FormInputBaseProps {
    /** Icon after value. Accepts SVGR icon or custom JSX. */
    IconAfter?: SVGRIcon;
    /** Icon before value. Accepts SVGR icon or custom JSX. */
    IconBefore?: SVGRIcon;
    /** Input theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __theme?: FormInputTheme;
    /** Additional CSS. */
    css?: CSSObject;
}

export type FormInputProps<P extends React.ElementType = 'input'> = {} & MergeElementProps<P, FormInputBaseProps>;

/**
 * FormInput component.
 *
 * Render <div /> with `input[type="text"]` element. Can contain icons, error message and hint.
 *
 * Consume props from `Form` and `Form.Field` compoents.
 */
const FormInput = <T extends React.ElementType = 'input'>(
    { IconBefore, IconAfter, __theme, css, ...props }: FormInputProps<T>,
    ref: React.Ref<HTMLInputElement>,
) => {
    const { controlId, optional, size, hint, hintPosition, validationPosition } = useFormField();
    const { errorPosition, showSuccess, ErrorIcon, SuccessIcon } = useForm();

    /* Get theme objects. */
    const { componentTheme, usedTheme } = useComponentTheme('FormInput', __theme);
    const inputTheme = componentTheme as FormInputTheme;

    if (!inputTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const themeProperties = getThemeProperties(inputTheme, 'default');
    const themeDefaults = {
        borderWidth: 1,
        borderStyle: 'solid',
        time: 200,
        easing: 'ease',
        color: baseTheme.colors.black,
        bg: baseTheme.colors.white,
    };
    const tp: RequiredBy<FormInputThemeProperties, keyof typeof themeDefaults> = {
        ...themeDefaults,
        ...themeProperties,
    };

    const sizeProperties = inputTheme.sizes[size];
    const sizeDefaults = {
        height: scale(5),
        padding: `0.5em, ${scale(1)}`,
        iconSize: scale(3),
    };
    const sp: RequiredBy<FormInputSizeProperties, keyof typeof sizeDefaults> = {
        ...sizeDefaults,
        ...sizeProperties,
    };

    /* Define CSS rules from theme properties for default state. */
    const typographyName = sp.typography;
    const typographyCSS = typography(typographyName, usedTheme);
    const borderRadius = tp.borderRadius;
    const height = sp.height;
    const padding = `${sp.padding}`;
    const transition = getTransition(tp.time, tp.easing);

    const [field, meta] = useField(controlId);

    const defaultCSS: CSSObject = {
        width: '100%',
        height,
        borderWidth: tp.borderWidth,
        borderStyle: tp.borderStyle,
        ...typographyCSS,
        borderRadius,
        padding,
        paddingRight: IconAfter || validationPosition === 'inputAfter' ? `${height}px` : undefined,
        paddingLeft:
            IconBefore ||
            (validationPosition === 'inputBefore' && meta.touched && meta.error) ||
            (validationPosition === 'inputBefore' && meta.touched && !meta.error && showSuccess)
                ? `${height}px`
                : undefined,
        transition,
        ...getStateCSS(tp),
        ...sp.css,
    };

    /* Define CSS rules from theme properties for other states. */
    const themeHoverProperties = getThemeProperties(inputTheme, 'hover');
    const themeDisabledProperties = getThemeProperties(inputTheme, 'disabled');
    const themeFocusProperties = getThemeProperties(inputTheme, 'focus');
    const statesCSS: CSSObject = {
        ':hover': {
            ...getStateCSS(themeHoverProperties),
            ...(tp.timeIn && {
                transition: getTransition(tp.timeIn, tp.easing),
            }),
        },
        ':disabled': {
            ...getStateCSS(themeDisabledProperties),
            cursor: 'not-allowed',
        },
        ':focus': getStateCSS(themeFocusProperties),
    };

    /* Define CSS rules from theme properties for validation states. */
    const themeErrorProperties = getThemeProperties(inputTheme, 'error');
    const themeSuccessProperties = getThemeProperties(inputTheme, 'success');
    const validationCSS: CSSObject = {
        ...(meta.touched && meta.error && getStateCSS(themeErrorProperties)),
        ...(meta.touched && !meta.error && showSuccess && getStateCSS(themeSuccessProperties)),
    };

    const styles = [defaultCSS, statesCSS, validationCSS, css];

    const iconBeforeCSS: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `-${sp.iconSize / 2}px`,
        left: `${(height - sp.iconSize) / 2}px`,
        width: sp.iconSize,
        height: sp.iconSize,
        transition,
    };

    const iconAfterCSS: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `-${sp.iconSize / 2}px`,
        right: `${(height - sp.iconSize) / 2}px`,
        width: sp.iconSize,
        height: sp.iconSize,
        transition,
    };

    let validationIconHorizontalRule;

    if (validationPosition === 'inputBefore') {
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
        [validationIconHorizontalRule]: `${(height - sp.iconSize) / 2}px`,
        width: sp.iconSize,
        height: sp.iconSize,
    };
    const errorIconProperties = getIconProperty(formTheme, 'errorIcon');
    const iconErrorStyles = [iconErrorDefaultStyles, getIconCSS(errorIconProperties), formTheme.errorIcon?.css];

    const iconSuccessDefaultStyles: CSSObject = {
        position: 'absolute',
        top: '50%',
        marginTop: `${-(sp.iconSize / 2)}px`,
        [validationIconHorizontalRule]: `${(height - sp.iconSize) / 2}px`,
        width: sp.iconSize,
        height: sp.iconSize,
    };
    const successIconProperties = getIconProperty(formTheme, 'successIcon');
    const iconSuccessStyles = [iconSuccessDefaultStyles, getIconCSS(successIconProperties), formTheme.successIcon?.css];
    const getDescribedByList = () => {
        const hintId = hint && hintPosition === 'bottom' ? `hint-${controlId}` : undefined;
        const errorId = meta.touched && meta.error && errorPosition === 'bottom' ? `error-${controlId}` : undefined;
        return hintId && errorId ? `${hintId} ${errorId}` : hintId || errorId;
    };

    const inputProps = {
        type: 'text',
        name: controlId,
        required: !optional,
        'aria-invalid': meta.touched && meta.error ? true : undefined,
        'aria-required': optional ? undefined : true,
        'aria-describedby': getDescribedByList(),
        disabled: false,
        ...props,
    };

    const fieldBaseStyles: CSSObject = {
        position: 'relative',
        ':hover': {
            ...(!inputProps.disabled && getStateFieldCSS(themeHoverProperties)),
        },
    };

    const fieldDisabledStyles: CSSObject = {
        ...(inputProps.disabled && getStateFieldCSS(themeDisabledProperties)),
    };

    const fieldStyles = [fieldBaseStyles, fieldDisabledStyles];

    return (
        <>
            <div css={fieldStyles}>
                <input id={controlId} {...field} {...inputProps} ref={ref} css={styles} />
                {IconBefore &&
                    !(validationPosition === 'inputBefore' && meta.touched && meta.error) &&
                    !(validationPosition === 'inputBefore' && meta.touched && !meta.error && showSuccess) && (
                        <IconBefore css={iconBeforeCSS} />
                    )}
                {IconAfter &&
                    !(validationPosition === 'inputAfter' && meta.touched && meta.error) &&
                    !(validationPosition === 'inputAfter' && meta.touched && !meta.error && showSuccess) && (
                        <IconAfter css={iconAfterCSS} />
                    )}
                {(validationPosition === 'inputAfter' || validationPosition === 'inputBefore') &&
                    meta.touched &&
                    meta.error &&
                    ErrorIcon && <ErrorIcon css={iconErrorStyles} />}
                {(validationPosition === 'inputAfter' || validationPosition === 'inputBefore') &&
                    meta.touched &&
                    !meta.error &&
                    showSuccess &&
                    SuccessIcon && <SuccessIcon css={iconSuccessStyles} />}
            </div>
            {meta.error && meta.touched && errorPosition === 'bottom' && (
                <FormError err={meta.error} id={`error-${controlId}`} />
            )}
            {hint && hintPosition === 'bottom' && <FormHint id={`hint-${controlId}`} />}
        </>
    );
};

const getStateCSS = ({ color, bg, border, shadow, css }: FormInputStateProperties) => ({
    color,
    background: bg,
    borderColor: border,
    boxShadow: shadow,
    ...css,
});

const getStateFieldCSS = ({ fill }: FormInputStateProperties) => ({
    fill,
});

const getThemeProperties = (
    inputTheme: FormInputTheme,
    state: ComponentStates | 'success' | 'error' | 'default',
): FormInputThemeProperties | FormInputStateProperties => {
    const themeProperties = inputTheme.base[state];
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
    ['color', 'fill', 'background-color', 'border-color', 'box-shadow']
        .map((name) => `${name} ${easing} ${time}ms`)
        .join(', ');

export default FormInput;
