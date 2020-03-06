import * as React from 'react';
import cn from 'classnames';
import { Formik, Form as FormikForm, useField, useFormikContext } from 'formik';
import VisuallyHidden from '@components/VisuallyHidden';
import { IForm, IFormField, IFormHint, IFormError } from './Form';
import ErrorIcon from '../../icons/tokens/medium/crossCircle.svg';

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

export const FormField: React.FC<IFormField> = ({ name, children, className, required, ...props }) => {
    const { values } = useFormikContext();
    const [field, meta, helpers] = useField(name);

    const baseClass = 'form__field';
    const classes = cn(baseClass, className);

    const inputClasses = cn({
        [`${baseClass}-input`]: true,
        [`${baseClass}-input--error`]: meta.touched && meta.error,
    });

    const inputProps = {
        type: 'text',
        name,
        required,
        ...props,
    };

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
                <input id={name} {...field} {...inputProps} className={inputClasses} />
            )}
        </div>
    );
};
export const FormHint: React.FC<IFormHint> = ({ Tag = 'span', hint, className, ...props }) => {
    const baseClass = 'form__field-hint';
    const classes = cn(baseClass, className);
    return (
        <Tag className={classes} {...props}>
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

export const FormGroup: React.FC<IFormGroup> = ({
    Tag = 'div',
    name,
    isRequired = true,
    errorIsTop = true,
    children,
    className,
    ...props
}) => {
    const baseClass = 'form-group';
    const classes = cn(baseClass, className);
    return (
        <Tag className={classes} {...props}>
            {children}
        </Tag>
    );
};

export const FormLabel: React.FC<IFormLabel> = ({ hidden = false, children, className, ...props }) => {
    const baseClass = 'form__label';
    const classes = cn(baseClass, className);

    return (
        <label className={classes} htmlFor={name} {...props}>
            {hidden ? <VisuallyHidden>{children}</VisuallyHidden> : children}
        </label>
    );
};

Form.Field = FormField;
Form.Label = FormLabel;
Form.Group = FormGroup;
Form.Hint = FormHint;
Form.Error = FormError;

export default Form;
