import React from 'react';
import { FormFieldContext, FormFieldContextProps } from './useFormField';

export interface FormFieldProps extends FormFieldContextProps {
    children: React.ReactElement;
}

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
            <div {...props}>{React.Children.map(children, (child) => React.cloneElement(child))}</div>
        </FormFieldContext.Provider>
    );
};

export default FormField;
