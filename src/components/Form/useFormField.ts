import React, { createContext, useContext } from 'react';

export interface FormFieldContextProps {
    /** Size name from list of sizes defined in theme object at `components.FormInput.sizes`. */
    size: string;
    /** Hint's positioning. */
    hintPosition?: 'top' | 'bottom';
    /** Hint text. */
    hint?: string;
    /** Set `htmlFor` to `Form.Label` and `id` and `name` to `Form.Input`. */
    controlId: string;
    /** Visually hidden label. Keeps text accessible. */
    hiddenLabel?: boolean;
    /** Validation icon's positioning. */
    validationPosition?: 'labelBefore' | 'labelAfter' | 'inputBefore' | 'inputAfter';
    /** Set optional fill to `Form.Input`. If get string, also set optional text to `Form.Label`. */
    optional?: boolean | string;
}

export const FormFieldContext = createContext<FormFieldContextProps | undefined>(undefined);

export const useFormField = (): FormFieldContextProps => {
    const context = useContext(FormFieldContext);

    if (!context) {
        throw new Error('This component must be used within a <FormField> component');
    }

    return context;
};

export default useFormField;
