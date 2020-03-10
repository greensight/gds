import * as React from 'react';
import { useContext, createContext } from 'react';
import useTheme from '@utils/useTheme';
import cn from 'classnames';
import { Formik, Form as FormikForm, useField, useFormikContext } from 'formik';
import VisuallyHidden from '@components/VisuallyHidden';
import { IForm, IFormInput, IFormHint, IFormError, IFormField } from './Form';
import ErrorIcon from '../../icons/tokens/medium/crossCircle.svg';
import SuccessIcon from '../../icons/tokens/medium/checkCircle.svg';
import placeholderIcon from '../../icons/tokens/medium/placeholder.svg';

export const FormFieldContext = createContext();

export const Form: React.FC<IForm> = ({ initialValues, validationSchema, onSubmit, children, className, ...props }) => {
    const baseClass = 'form';
    const classes = cn(baseClass, className);

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {() => (
                <FormikForm className={classes} noValidate {...props}>
                    {children}
                </FormikForm>
            )}
        </Formik>
    );
};
export const FormInput: React.FC<IFormInput> = ({
    name,
    children,
    className,
    required = true,
    Icon,
    iconAfter = false,
    ...props
}) => {
    const { controlId, optional } = useContext(FormFieldContext);
    const fieldName = name || controlId;
    const [field, meta, helpers] = useField(fieldName);

    const baseClass = 'form__field';
    const classes = cn(baseClass, className);

    const inputClasses = cn({
        [`${baseClass}-input`]: true,
        [`${baseClass}-input--error`]: meta.touched && meta.error,
    });

    const inputProps = {
        type: 'text',
        name: name || controlId,
        className: inputClasses,
        required: !optional,
        ...props,
    };

    const { values } = useFormikContext();
    let IconComponent;
    if (typeof Icon === 'function') {
        IconComponent = <Icon />;
    } else if (typeof Icon === 'object') {
        IconComponent = cloneElement(Icon);
    }

    return (
        <div className={classes}>
            {children ? (
                React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        values,
                        field,
                        meta,
                        helpers,
                        id: child?.type?.displayName !== 'Legend' ? name : '',
                        ...inputProps,
                    });
                })
            ) : (
                <input id={fieldName} {...field} {...inputProps} className={inputClasses} />
            )}
            {Icon && IconComponent}
        </div>
    );
};
export const FormHint: React.FC<IFormHint> = ({ Tag = 'span', hint, className, ...props }) => {
    const baseClass = 'form__hint';
    const classes = cn(baseClass, className);
    const { controlId } = useContext(FormFieldContext);

    return (
        <Tag className={classes} aria-describedby={controlId} {...props}>
            {hint}
        </Tag>
    );
};
export const FormError: React.FC<IFormError> = ({ err, className }) => {
    const baseClass = 'form__error';
    const classes = cn(baseClass, className);

    return (
        <span className={classes}>
            <ErrorIcon className={`${baseClass}-icon`} />
            {err}
        </span>
    );
};
export const FormField: React.FC<IFormField> = ({
    Tag = 'div',
    Icon,
    iconAfter = false,
    controlId,
    optional,
    children,
    className,
    ...props
}) => {
    const baseClass = 'form-field';
    const classes = cn(baseClass, className);

    return (
        <FormFieldContext.Provider value={{ controlId, optional }}>
            <Tag className={classes} {...props}>
                {React.Children.map(children, child => React.cloneElement(child))}
            </Tag>
        </FormFieldContext.Provider>
    );
};
export const FormLabel: React.FC<IFormLabel> = ({
    hidden = false,
    name,
    isOptional = false,
    hint,
    Icon,
    IconAfter = false,
    children,
    className,
    ...props
}) => {
    const baseClass = 'form__label';
    const classes = cn(baseClass, className);

    const { controlId, optional } = useContext(FormFieldContext);
    const labelProps = {
        name: name || controlId,
        isOptional: isOptional || optional,
        ...props,
    };

    let IconComponent;
    if (typeof Icon === 'function') {
        IconComponent = <Icon />;
    } else if (typeof Icon === 'object') {
        IconComponent = cloneElement(Icon);
    }
    return (
        <label className={classes} htmlFor={labelProps.name} {...props}>
            <span className={`${baseClass}-text`}>
                {Icon && IconComponent}
                {hidden ? <VisuallyHidden>{children}</VisuallyHidden> : children}
                {labelProps.isOptional ? <span className={`${baseClass}-optional`}>(необязательное)</span> : ''}
            </span>
            {hint && <span className={`${baseClass}-hint`}>{hint}</span>}
        </label>
    );
};

Form.Input = FormInput;
Form.Label = FormLabel;
Form.Field = FormField;
Form.Hint = FormHint;
Form.Error = FormError;

export default Form;
