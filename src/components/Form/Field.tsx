import React from 'react';
import { FormFieldContext, FormFieldContextProps } from './useFormField';

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
    hiddenLabel = false,
    validationPosition = 'labelAfter',
    optional,
    children,
    __hintTheme,
    __errorTheme,
    ...props
}: FormFieldProps) => {
    return (
        <FormFieldContext.Provider
            value={{
                controlId,
                optional,
                size,
                hintPosition,
                hint,
                hiddenLabel,
                validationPosition,
                __hintTheme,
                __errorTheme,
            }}
        >
            <div {...props}>{children}</div>
        </FormFieldContext.Provider>
    );
};

export default FormField;
