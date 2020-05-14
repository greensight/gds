import React from 'react';
import { FormFieldContext, FormFieldContextProps } from './useFormField';
import { useField, useFormikContext } from 'formik';
import { FormikProps } from './';
import { useForm } from './useForm';
export interface FormFieldProps extends FormFieldContextProps, Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    /** Field content. */
    children: React.ReactNode;
}

/**
 * FormField component.
 *
 * Define sizes in theme object (`components.FormInput`) and use it as `size` prop values.
 *
 * Provide props to `Form.Label` and `Form.Input` components.
 *
 */
export const FormField = ({
    size = 'md',
    hintPosition = 'top',
    hint,
    controlId,
    validationPosition = 'labelAfter',
    optional,
    children,
    __hintTheme,
    __errorTheme,
    ...props
}: FormFieldProps) => {
    const { values } = useFormikContext<any[]>();
    const [field, meta, helpers] = useField(controlId);
    const { errorPosition, requiredRule, showSuccess, ErrorIcon, SuccessIcon } = useForm();
    // const legendProps = {
    //     errorPosition,
    //     requiredRule,
    //     showSuccess,
    //     ErrorIcon,
    //     SuccessIcon,
    // };

    const inputProps = {
        type: 'text',
        name: controlId,
        required: !optional,
        ...props,
    };

    return (
        <FormFieldContext.Provider
            value={{
                controlId,
                optional,
                size,
                hintPosition,
                hint,
                validationPosition,
                __hintTheme,
                __errorTheme,
            }}
        >
            <div {...props}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        const formikProps: FormikProps<any> = {
                            values,
                            field,
                            meta,
                            helpers,
                            size,
                            optional,
                            hint,
                            hintPosition,
                            validationPosition,
                            errorPosition,
                            ErrorIcon,
                            showSuccess,
                            SuccessIcon,
                            requiredRule,
                            controlId,
                            ...((child?.type as React.FC)?.displayName !== 'Legend' ? { id: name } : {}),

                            ...inputProps,
                            ...child.props,
                        };
                        return React.cloneElement(child, { formikProps });
                    }
                })}
            </div>
        </FormFieldContext.Provider>
    );
};

export default FormField;
