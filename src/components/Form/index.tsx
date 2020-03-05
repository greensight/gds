import * as React from 'react';
import cn from 'classnames';
import { Formik, Form as FormikForm, useField, useFormikContext } from 'formik';
import { IForm, IFormField, IFormError } from './Form';

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

export default Form;
