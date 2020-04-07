/** Импорт React нужен для tsc. */
import React, { createContext, useContext } from 'react';
import { SVGRIcon } from '../../types/Utils';

export interface FormContextProps {
    /** Error's positioning. */
    errorPosition: 'top' | 'bottom';
    /** Switch between optional text & asterisk. */
    required: 'optional' | 'mark';
    /** Error icon for validation. */
    ErrorIcon?: SVGRIcon;
    /** Success icon for validation. Doesn't make sense without `showSuccess` prop. */
    SuccessIcon?: SVGRIcon;
    /** Show success status for validation or not. */
    showSuccess?: boolean;
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
