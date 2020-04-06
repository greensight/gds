import React from 'react';
import { FormFieldContext, FormFieldContextProps } from './useFormField';

export interface FormFieldProps extends FormFieldContextProps {
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
export const FormField: React.FC<FormFieldProps> & React.HTMLProps<HTMLDivElement> = ({
    size = 'md',
    hintPosition = 'top',
    hint,
    controlId,
    hiddenLabel = false,
    validationPosition = 'labelAfter',
    optional,
    children,
    ...props
}: FormFieldProps) => {
    return (
        <FormFieldContext.Provider
            value={{ controlId, optional, size, hintPosition, hint, hiddenLabel, validationPosition }}
        >
            <div {...props}>{children}</div>
        </FormFieldContext.Provider>
    );
};

export default FormField;
