import * as React from 'react';
import { useContext, createContext, useEffect } from 'react';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import typography from '@helpers/customTypography';
import { MAJOR_STEP_DEFAULT } from '@helpers/constants';
import { Formik, Form as FormikForm, useField, useFormikContext } from 'formik';
import VisuallyHidden from '@components/VisuallyHidden';
import cloneElement from '@helpers/cloneElement';
import { IForm, IFormInput, IFormError, IFormField, IFormLabel } from './Form';

export const FormFieldContext = createContext();
export const FormContext = createContext();

const FocusError = () => {
    const { errors, isSubmitting, isValidating } = useFormikContext();
    useEffect(() => {
        if (isSubmitting && !isValidating) {
            const keys = Object.keys(errors);
            if (keys.length > 0) {
                const selector = `[name=${keys[0]}]`;
                const errorElement = document.querySelector(selector) as HTMLElement;
                if (errorElement) {
                    errorElement.focus();
                }
            }
        }
    }, [errors, isSubmitting, isValidating]);

    return null;
};

export const Form: React.FC<IForm> = ({
    errorPosition = 'top',
    required = 'optional',
    ErrorIcon,
    showSuccess = true,
    SuccessIcon,
    initialValues,
    validationSchema,
    onSubmit,
    children,
    ...props
}) => {
    return (
        <FormContext.Provider value={{ errorPosition, required, showSuccess, ErrorIcon, SuccessIcon }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {() => (
                    <FormikForm noValidate {...props}>
                        {children}
                        <FocusError />
                    </FormikForm>
                )}
            </Formik>
        </FormContext.Provider>
    );
};
export const FormInput: React.FC<IFormInput> = ({
    theme = 'primary',
    children,
    Icon,
    iconAfter = false,
    css,
    ...props
}) => {
    const { controlId, optional, size, hint, hintPosition, hiddenLabel } = useContext(FormFieldContext);
    const { errorPosition, showSuccess, ErrorIcon, SuccessIcon } = useContext(FormContext);
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form.Input ? globalTheme : baseTheme;
    const inputTheme = usedTheme.components.Form.Input;
    const hintTheme = usedTheme.components.Form.Hint;

    if (!inputTheme.themes[theme]) {
        console.warn(`Specify "${theme}" theme. Default values are used instead`);
    }

    if (!inputTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name, defaultValue) => {
        const themeStyles = inputTheme.themes[theme];
        let themeRule;
        if (themeStyles) themeRule = themeStyles[name];

        const sizeStyles = inputTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = inputTheme.base;
        const baseRule = baseStyles?.[name];

        return themeRule || sizeRule || baseRule || defaultValue;
    };

    const getStateStyles = (name, css) => {
        const state = getRule(name);
        if (!state) return;
        const { color, bg, border, shadow, css: stateCss } = state;
        return {
            [`:${name}`]: {
                color,
                fill: color,
                background: bg,
                borderColor: border,
                boxShadow: shadow,
                ...stateCss,
                ...css,
            },
        };
    };

    const transition = time =>
        ['color', 'fill', 'background-color', 'border-color', 'border-width', 'box-shadow']
            .map(name => `${name} ${easing} ${time}ms`)
            .join(', ');

    const border = getRule('border');
    const borderWidth = getRule('borderWidth', border ? 1 : 0);
    const borderStyle = getRule('borderStyle', 'solid');
    const borderRadius = getRule('borderRadius', 4);
    const time = getRule('time', 200);
    const timeIn = getRule('timeIn');
    const easing = getRule('easing', 'ease');
    const typographyName = getRule('typography');
    const height = getRule('height', scale(5));
    const padding = getRule('padding', scale(3));
    const iconSize = getRule('iconSize', scale(3));
    const color = getRule('color', baseTheme.colors.white);
    const bg = getRule('bg', baseTheme.colors.black);
    const shadow = getRule('shadow');

    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const paddingRule = `padding${!iconAfter ? 'Left' : 'Right'}`;
    const [field, meta, helpers] = useField(controlId);
    const styles = [
        {
            width: '100%',
            borderWidth,
            borderStyle,
            borderRadius,
            height,
            padding: `${padding}px`,
            [paddingRule]: Icon ? `${height}px` : `${padding}px`,
            ...typographyStyles,
            color,
            fill: color,
            background: bg,
            borderColor: border,
            boxShadow: shadow,
            transition: transition(time),
            ...getStateStyles('hover', {
                ...(timeIn && { transition: transition(timeIn) }),
            }),
            ...getStateStyles('disabled', {
                cursor: 'not-allowed',
            }),
            ...getStateStyles('focus'),
        },
        inputTheme.base?.css,
        inputTheme.sizes?.[size]?.css,
        inputTheme.themes?.[theme]?.css,
        meta.touched && meta.error && inputTheme.themes?.[theme]?.validation.error.css,
        meta.touched && !meta.error && showSuccess && inputTheme.themes?.[theme]?.validation.success.css,
        css,
    ];

    const horizontalRule = `${!iconAfter ? 'left' : 'right'}`;
    const iconProps = {
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `-${iconSize / 2}px`,
            [horizontalRule]: `${(height - iconSize) / 2}px`,
            width: iconSize,
            height: iconSize,
        },
    };

    let IconComponent;
    if (typeof Icon === 'function') {
        IconComponent = <Icon {...iconProps} />;
    } else if (typeof Icon === 'object') {
        IconComponent = cloneElement(Icon, iconProps);
    }

    const validationHorizontalRule = `${!iconAfter ? 'right' : 'left'}`;
    const iconErrorProps = {
        fill: globalTheme.components?.Form.errorIcon.fill,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationHorizontalRule]: `${(height - iconSize) / 2}px`,
            width: iconSize,
            height: iconSize,
        },
    };

    let IconErrorComponent;
    if (typeof ErrorIcon === 'function') {
        IconErrorComponent = <ErrorIcon {...iconErrorProps} />;
    } else if (typeof ErrorIcon === 'object') {
        IconErrorComponent = cloneElement(ErrorIcon, iconErrorProps);
    }

    const iconSuccessProps = {
        fill: globalTheme.components?.Form.successIcon.fill,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationHorizontalRule]: `${(height - iconSize) / 2}px`,
            width: iconSize,
            height: iconSize,
        },
    };

    let IconSuccessComponent;
    if (typeof SuccessIcon === 'function') {
        IconSuccessComponent = <SuccessIcon {...iconSuccessProps} />;
    } else if (typeof ErrorIcon === 'object') {
        IconSuccessComponent = cloneElement(SuccessIcon, iconSuccessProps);
    }

    const fieldStyles = [
        {
            position: 'relative',
        },
    ];

    const hintStyles = [
        {
            color: hintTheme.color,
            ...typographyStyles,
        },
        hintTheme.css,
    ];

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
        ...props,
    };

    const { values } = useFormikContext();

    return (
        <>
            <div css={fieldStyles}>
                {children ? (
                    React.Children.map(children, child => {
                        return React.cloneElement(child, {
                            values,
                            field,
                            meta,
                            helpers,
                            id: child?.type?.displayName !== 'Legend' ? controlId : '',
                            ...inputProps,
                        });
                    })
                ) : (
                    <input id={controlId} {...field} {...inputProps} css={styles} />
                )}
                {!iconAfter && IconComponent}
                {iconAfter && typeof meta.error === 'undefined' && !meta.touched && IconComponent}
                {meta.touched && meta.error && hiddenLabel && IconErrorComponent}
                {meta.touched && !meta.error && showSuccess && hiddenLabel && IconSuccessComponent}
            </div>
            {meta.error && meta.touched && errorPosition === 'bottom' && (
                <FormError err={meta.error} id={`error-${controlId}`} />
            )}
            {hint && hintPosition === 'bottom' && (
                <span id={`hint-${controlId}`} css={hintStyles}>
                    {hint}
                </span>
            )}
        </>
    );
};
const FormError: React.FC<IFormError> = ({ err, css, ...props }) => {
    const { size } = useContext(FormFieldContext);
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form.Error ? globalTheme : baseTheme;
    const errorTheme = usedTheme.components.Form.Error;

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
    const typographyName = getRule('typography');
    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const marginTop = getRule('marginTop', scale(1));
    const styles = [
        {
            display: 'block',
            color: errorTheme.color,
            marginTop,
            ...typographyStyles,
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
export const FormField: React.FC<IFormField> = ({
    Tag = 'div',
    size = 'md',
    hintPosition = 'top',
    hint,
    controlId,
    hiddenLabel = false,
    validationPosition = 'labelRight',
    optional,
    children,
    ...props
}) => {
    return (
        <FormFieldContext.Provider
            value={{ controlId, optional, size, hintPosition, hint, hiddenLabel, validationPosition }}
        >
            <Tag {...props}>{React.Children.map(children, child => React.cloneElement(child))}</Tag>
        </FormFieldContext.Provider>
    );
};
export const FormLabel: React.FC<IFormLabel> = ({ Icon, iconAfter = false, children, css, ...props }) => {
    const { controlId, optional, size, hint, hintPosition, hiddenLabel, validationPosition } = useContext(
        FormFieldContext,
    );
    const { errorPosition, required, ErrorIcon, showSuccess, SuccessIcon } = useContext(FormContext);
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form ? globalTheme : baseTheme;
    const labelTheme = usedTheme.components.Form.Label;
    const hintTheme = usedTheme.components.Form.Hint;
    const optionalTheme = usedTheme.components.Form.Label.Optional;
    const markTheme = usedTheme.components.Form.Label.Mark;

    const [, meta] = useField(controlId);

    if (!labelTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name, defaultValue) => {
        const sizeStyles = labelTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = labelTheme.base;
        const baseRule = baseStyles?.[name];

        return sizeRule || baseRule || defaultValue;
    };

    const iconSize = getRule('iconSize', scale(3));
    const typographyName = getRule('typography');
    const marginBottom = getRule('marginBottom', scale(1));
    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const styles = [
        {
            display: 'block',
            ...typographyStyles,
            marginBottom,
        },
        labelTheme.base?.css,
        labelTheme.sizes?.[size]?.css,
        meta.touched && meta.error && labelTheme?.validation.error.css,
        meta.touched && !meta.error && showSuccess && labelTheme?.validation.success.css,
        css,
    ];
    const textStyles = [
        {
            position: 'relative',
            display: 'block',
            marginBottom,
            paddingRight: Icon && iconAfter ? `${iconSize + MAJOR_STEP_DEFAULT}px` : 0,
            paddingLeft: Icon && !iconAfter ? `${iconSize + MAJOR_STEP_DEFAULT}px` : 0,
        },
    ];

    const hintStyles = [hintTheme.css];

    const markStyles = [markTheme.css];
    const optionalStyles = [optionalTheme.css];

    const iconHorizontalRule = `${!iconAfter ? 'left' : 'right'}`;

    const iconProps = {
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [iconHorizontalRule]: 0,
            width: iconSize,
            height: iconSize,
        },
    };

    const validationHorizontalRule = `${
        validationPosition === 'labelLeft' ? 'left' : validationPosition === 'labelRight' ? 'right' : 0
    }`;
    const iconErrorProps = {
        fill: labelTheme?.validation.error.css.color,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationHorizontalRule]: 0,
            width: iconSize,
            height: iconSize,
        },
    };

    const iconSuccessProps = {
        fill: labelTheme?.validation.success.css.color,
        css: {
            position: 'absolute',
            top: '50%',
            marginTop: `${-(iconSize / 2)}px`,
            [validationHorizontalRule]: 0,
            width: iconSize,
            height: iconSize,
        },
    };

    const labelProps = {
        name: controlId,
        ...props,
    };

    let IconComponent;
    if (typeof Icon === 'function') {
        IconComponent = <Icon {...iconProps} />;
    } else if (typeof Icon === 'object') {
        IconComponent = cloneElement(Icon, iconProps);
    }

    let IconErrorComponent;
    if (typeof ErrorIcon === 'function') {
        IconErrorComponent = <ErrorIcon {...iconErrorProps} />;
    } else if (typeof ErrorIcon === 'object') {
        IconErrorComponent = cloneElement(ErrorIcon, iconErrorProps);
    }

    let IconSuccessComponent;
    if (typeof SuccessIcon === 'function') {
        IconSuccessComponent = <SuccessIcon {...iconSuccessProps} />;
    } else if (typeof SuccessIcon === 'object') {
        IconSuccessComponent = cloneElement(SuccessIcon, iconSuccessProps);
    }
    console.log(validationPosition === 'labelRight' || validationPosition === 'labelLeft');
    return (
        <label htmlFor={labelProps.name} css={styles} {...props}>
            <span css={textStyles}>
                {hiddenLabel ? <VisuallyHidden>{children}</VisuallyHidden> : children}
                {iconAfter &&
                    !hiddenLabel &&
                    !(meta.error && meta.touched && validationPosition === 'labelRight') &&
                    IconComponent}
                {!iconAfter &&
                    !hiddenLabel &&
                    !(meta.error && meta.touched && validationPosition === 'labelLeft') &&
                    IconComponent}
                {meta.touched &&
                    meta.error &&
                    !hiddenLabel &&
                    (validationPosition === 'labelRight' || validationPosition === 'labelLeft') &&
                    IconErrorComponent}
                {meta.touched &&
                    !meta.error &&
                    showSuccess &&
                    !hiddenLabel &&
                    (validationPosition === 'labelRight' || validationPosition === 'labelLeft') &&
                    IconSuccessComponent}
                {optional && required === 'optional' && <span css={optionalStyles}>{optional}</span>}
                {!optional && required === 'mark' && !hiddenLabel && (
                    <span css={markStyles} aria-hidden="true">
                        *
                    </span>
                )}
            </span>
            {hint && hintPosition === 'top' && (
                <span css={hintStyles}>{hiddenLabel ? <VisuallyHidden>{hint}</VisuallyHidden> : hint}</span>
            )}
            {meta.error && meta.touched && errorPosition === 'top' && <FormError err={meta.error} />}
        </label>
    );
};

Form.Input = FormInput;
Form.Label = FormLabel;
Form.Field = FormField;

export default Form;
