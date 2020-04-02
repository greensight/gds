import * as React from 'react';
import { useContext, createContext } from 'react';

export interface FormFieldProps {
    /** Размер. Выбирается из определённых в объекте темы */
    size?: string;
    /** Позиционирование подсказки к полю */
    hintPosition: 'top' | 'bottom';
    /** Текст подсказки */
    hint: string;
    /** Устанавливает id компонентам FormInput и FormLabel */
    controlId: string;
    /** Визуально скрытый лейбл для скрин-ридеров */
    hiddenLabel: boolean;
    /** Расположение иконки валидации */
    validationPosition: 'labelBefore' | 'labelAfter' | 'inputBefore' | 'inputAfter';
    /** Устанавливает опциональное заполнение компоненту */
    optional?: boolean;
}

const FormFieldContext = createContext();
export const useFormField = (): FormFieldProps => {
    const context = useContext(FormFieldContext);

    if (!context) {
        throw new Error('This component must be used within a <FormField> component');
    }

    return context;
};

const FormField = ({
    size = 'md',
    hintPosition = 'top',
    hint,
    controlId,
    hiddenLabel = false,
    validationPosition = 'labelAfter',
    optional,
    children,
    ...props
}: FormInputProps) => {
    return (
        <FormFieldContext.Provider
            value={{ controlId, optional, size, hintPosition, hint, hiddenLabel, validationPosition }}
        >
            <div {...props}>{React.Children.map(children, (child) => React.cloneElement(child))}</div>
        </FormFieldContext.Provider>
    );
};

export default FormField;
