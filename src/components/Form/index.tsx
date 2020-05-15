import React, { useEffect } from 'react';
import {
    Formik,
    Form as FormikForm,
    FormikFormProps,
    FormikValues,
    FormikHelpers,
    FieldInputProps,
    FieldMetaProps,
    FieldHelperProps,
    useFormikContext,
} from 'formik';

import * as Yup from 'yup';
import FormField, { FormFieldProps } from './Field';
import FormInput, { FormInputProps } from './Input';
import { FormContext, FormContextProps } from './useForm';

export interface FormCompositionProps {
    Field: React.FC<FormFieldProps>;
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

export interface FormikProps<T> extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
    /** `values` from `useFormikContext` */
    values: FormikValues;
    /** `field` from `useField` */
    field: FieldInputProps<T>;
    /** `meta` from `useField` */
    meta: FieldMetaProps<T>;
    /** `helpers` from `useField` */
    helpers: FieldHelperProps<T>;
    /** Error's positioning. */
    errorPosition?: 'top' | 'bottom';
    /** Switch between optional text & asterisk. */
    requiredRule?: 'optional' | 'mark';
    /** Error icon for validation. */
    ErrorIcon?: SVGRIcon;
    /** Success icon for validation. Doesn't make sense without `showSuccess` prop. */
    SuccessIcon?: SVGRIcon;
    /** Show success status for validation or not. */
    showSuccess?: boolean;
    /** Size name from list of sizes defined in theme object at `components.FormInput.sizes`. */
    size: string;
    /** Hint's positioning. */
    hintPosition?: 'top' | 'bottom';
    /** Hint text. */
    hint?: string;
    /** Set `htmlFor` to `Form.Label` and `id` and `name` to `Form.Input`. */
    controlId: string;
    /** Validation icon's positioning. */
    validationPosition?: 'labelBefore' | 'labelAfter' | 'inputBefore' | 'inputAfter';
    /** Set optional fill to `Form.Input`. If get string, also set optional text to `Form.Label`. */
    optional?: boolean | string;
}

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
    requiredRule = 'optional',
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
        <FormContext.Provider value={{ errorPosition, requiredRule, showSuccess, ErrorIcon, SuccessIcon }}>
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
Form.Field = FormField;

export default Form;
