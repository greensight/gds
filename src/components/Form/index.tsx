import * as React from 'react';
import { useContext, createContext, useEffect } from 'react';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import typography from '@helpers/customTypography';
import { MAJOR_STEP_DEFAULT } from '@helpers/constants';
import cn from 'classnames';
import { Formik, Form as FormikForm, useField, useFormikContext } from 'formik';
import VisuallyHidden from '@components/VisuallyHidden';
import cloneElement from '@helpers/cloneElement';
import { IForm, IFormInput, IFormHint, IFormError, IFormField, IFormLabel } from './Form';
import ErrorIcon from '../../icons/tokens/medium/crossCircle.svg';
import SuccessIcon from '../../icons/tokens/medium/checkCircle.svg';
import placeholderIcon from '../../icons/tokens/medium/placeholder.svg';

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
    theme,
    initialValues,
    validationSchema,
    onSubmit,
    children,
    className,
    ...props
}) => {
    const baseClass = 'form';
    const classes = cn(baseClass, className);

    return (
        <FormContext.Provider value={{ theme }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {() => (
                    <FormikForm className={classes} noValidate {...props}>
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
    className,
    Icon,
    iconAfter = false,
    css,
    ...props
}) => {
    const { controlId, optional, size } = useContext(FormFieldContext);
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form.Input ? globalTheme : baseTheme;
    const inputTheme = usedTheme.components.Form.Input;

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
    const paddingRule = `padding${!iconAfter ? 'Right' : 'Left'}`;

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
            ...getStateStyles('error'),
            ...getStateStyles('disabled', {
                cursor: 'not-allowed',
            }),
            ...getStateStyles('focus'),
        },
        inputTheme.base?.css,
        inputTheme.sizes?.[size]?.css,
        inputTheme.themes?.[theme]?.css,
        css,
    ];

    const horizontalRule = `${!iconAfter ? 'right' : 'left'}`;

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

    const fieldStyles = [
        {
            position: 'relative',
        },
    ];

    const [field, meta, helpers] = useField(controlId);

    const baseClass = 'form__field';
    const classes = cn(baseClass, className);

    const inputClasses = cn({
        [`${baseClass}-input`]: true,
        [`${baseClass}-input--error`]: meta.touched && meta.error,
    });

    const inputProps = {
        type: 'text',
        name: controlId,
        className: inputClasses,
        required: !optional,
        'aria-required': !optional,
        ...props,
    };

    const { values } = useFormikContext();

    return (
        <div>
            <div className={classes} css={fieldStyles}>
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
                    <input id={controlId} {...field} {...inputProps} className={inputClasses} css={styles} />
                )}
                {Icon && IconComponent}
            </div>
            {meta.error && meta.touched && !usedTheme.components.Form.themes?.[theme]?.errorIsTop && (
                <FormError err={meta.error} aria-describedby={controlId} />
            )}
        </div>
    );
};
export const FormHint: React.FC<IFormHint> = ({ Tag = 'span', hint, className, css, ...props }) => {
    const baseClass = 'form__hint';
    const classes = cn(baseClass, className);

    const { controlId, size } = useContext(FormFieldContext);

    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form.Hint ? globalTheme : baseTheme;
    const hintTheme = usedTheme.components.Form.Hint;

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
    const typographyName = getRule('typography');
    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const marginTop = getRule('marginTop', scale(1));
    const styles = [
        {
            display: 'block',
            color: hintTheme.color,
            marginTop,
            ...typographyStyles,
        },
        hintTheme.sizes?.[size]?.css,
        css,
    ];

    return (
        <Tag className={classes} aria-describedby={controlId} css={styles} {...props}>
            {hint}
        </Tag>
    );
};
const FormError: React.FC<IFormError> = ({ err, css, className, ...props }) => {
    const { controlId, size } = useContext(FormFieldContext);
    const baseClass = 'form__error';
    const classes = cn(baseClass, className);
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
        <span className={classes} css={styles} {...props}>
            {err}
        </span>
    );
};
export const FormField: React.FC<IFormField> = ({
    Tag = 'div',
    size = 'md',
    controlId,
    optional,
    children,
    className,
    ...props
}) => {
    const baseClass = 'form-field';
    const classes = cn(baseClass, className);

    const [field, meta, helpers] = useField(controlId);
    const { theme } = useContext(FormContext);
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form ? globalTheme : baseTheme;
    return (
        <FormFieldContext.Provider value={{ controlId, optional, size }}>
            <Tag className={classes} {...props}>
                {React.Children.map(children, child => React.cloneElement(child))}
            </Tag>
        </FormFieldContext.Provider>
    );
};
export const FormLabel: React.FC<IFormLabel> = ({
    hidden = false,
    hint,
    Icon,
    iconAfter = false,
    children,
    className,
    css,
    ...props
}) => {
    const { controlId, optional, size } = useContext(FormFieldContext);
    const { theme } = useContext(FormContext);
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form ? globalTheme : baseTheme;
    const labelTheme = usedTheme.components.Form.Label;
    const hintTheme = usedTheme.components.Form.Hint;
    const optionalTheme = usedTheme.components.Form.Label.Optional;
    const markTheme = usedTheme.components.Form.Label.Mark;
    if (!labelTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }

    const getRule = (name, defaultValue) => {
        // const themeStyles = labelTheme.themes[theme];
        // let themeRule;
        // if (themeStyles) themeRule = themeStyles[name];

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
        css,
    ];
    const paddingRule = `padding${!iconAfter ? 'Left' : 'Right'}`;

    const textStyles = [
        {
            position: 'relative',
            display: 'block',
            marginBottom,
            [paddingRule]: Icon ? `${iconSize + MAJOR_STEP_DEFAULT}px` : 0,
        },
    ];

    const hintStyles = [
        {
            display: 'block',
            fontWeight: 'normal',
            color: hintTheme.color,
        },
    ];

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
    const [field, meta, helpers] = useField(controlId);

    const baseClass = 'form__label';
    // const classes = cn(baseClass, className);

    const classes = cn({
        [`${baseClass}`]: true,
        [`${baseClass}--error`]: meta.touched && meta.error,
    });

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
    console.log(usedTheme.components.Form.themes[theme]);
    return (
        <label className={classes} htmlFor={labelProps.name} css={styles} {...props}>
            <span className={`${baseClass}-text`} css={textStyles}>
                {!hidden && Icon && IconComponent}
                {hidden ? <VisuallyHidden>{children}</VisuallyHidden> : children}
                {!hidden && '\u00A0'}
                {optional && usedTheme.components.Form.themes?.[theme]?.optional && (
                    <span className={`${baseClass}-optional`} css={optionalStyles}>
                        {optional}
                    </span>
                )}
                {!hidden && '\u00A0'}
                {!optional && !usedTheme.components.Form.themes?.[theme]?.optional && !hidden && (
                    <span className={`${baseClass}-mark`} css={markStyles} aria-hidden="true">
                        *
                    </span>
                )}
            </span>
            {hint && (
                <span className={`${baseClass}-hint`} css={hintStyles}>
                    {hidden ? <VisuallyHidden>{hint}</VisuallyHidden> : hint}
                </span>
            )}
            {meta.error && meta.touched && usedTheme.components.Form.themes?.[theme]?.errorIsTop && (
                <FormError err={meta.error} />
            )}
        </label>
    );
};

Form.Input = FormInput;
Form.Label = FormLabel;
Form.Field = FormField;
Form.Hint = FormHint;

export default Form;
