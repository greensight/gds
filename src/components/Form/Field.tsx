import * as React from 'react';
import { useContext, createContext } from 'react';
import { IFormField } from './Form';

const FormFieldContext = createContext();
export const useFormField = (): IFormField => {
    const context = useContext(FormFieldContext);

    if (!context) {
        throw new Error('This component must be used within a <FormField> component');
    }

    return context;
};
export const FormField: React.FC<IFormField> = ({
    size = 'md',
    hintPosition = 'top',
    hint,
    controlId,
    hiddenLabel = false,
    validationPosition = 'labelAfter',
    optional,
    children,
    ...props
}) => {
    return (
        <FormFieldContext.Provider
            value={{ controlId, optional, size, hintPosition, hint, hiddenLabel, validationPosition }}
        >
            <div {...props}>{React.Children.map(children, (child) => React.cloneElement(child))}</div>
        </FormFieldContext.Provider>
    );
};

export default FormField;
