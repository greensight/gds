import React, { useEffect } from 'react';
import { Formik, Form as FormikForm, FormikFormProps, FormikValues, FormikHelpers, useFormikContext } from 'formik';
import * as Yup from 'yup';
import FormField, { FormFieldProps } from './Field';
import FormLabel, { FormLabelProps } from './Label';
import FormInput, { FormInputProps } from './Input';
import { FormContext, FormContextProps } from './useForm';

export interface FormCompositionProps {
    Field: React.FC<FormFieldProps>;
    Label: React.FC<FormLabelProps>;
    Input: React.FC<FormInputProps>;
}

export interface FormProps extends FormContextProps, FormikFormProps {
    /** Form content. */
    children: React.ReactNode;
    /** Initial formik values. */
    initialValues: FormikValues;
    /** Yup validation schema. */
    validationSchema?: Yup.Schema<any> | (() => Yup.Schema<any>);
    /** Formik submit handler. */
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>;
}
console.log('test');
/**
 * Focus to first invalid input after submit.
 */
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

export const Form: React.FC<FormProps> & FormCompositionProps = ({
    errorPosition = 'top',
    required = 'optional',
    SuccessIcon,
    ErrorIcon,
    showSuccess = true,
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

Form.Input = React.forwardRef(FormInput);
Form.Label = FormLabel;
Form.Field = FormField;

export default Form;
