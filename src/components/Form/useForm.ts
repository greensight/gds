/** Импорт React нужен для tsc. */
import React, { createContext, useContext } from 'react';
import { SVGRIcon } from '../../types/Utils';

export interface FormContextProps {
    /** Error position */
    errorPosition: 'top' | 'bottom';
    /** Switch between optional text & asterisk */
    required: 'optional' | 'mark';
    /** Error icon for validation */
    ErrorIcon?: SVGRIcon;
    /** Success icon for validation */
    SuccessIcon?: SVGRIcon;
    /** Show success status for validation or not */
    showSuccess: boolean;
    // /** Form theme object for internal testing purposes. Uses in Storybook knobs to play with theme. */
    // themeObj?: FormTheme;
}

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useForm = (): FormContextProps => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error('This component must be used within a <Form> component');
    }

    return context;
};

export default useForm;
