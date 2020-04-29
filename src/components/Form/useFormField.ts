import React, { createContext, useContext } from 'react';
import { FormHintTheme, FormErrorTheme } from '../../types/Form';

export interface FormFieldContextProps {
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
    /** Hint theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __hintTheme?: FormHintTheme;
    /** Hint theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    __errorTheme?: FormErrorTheme;
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
