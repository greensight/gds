/** Импорт React нужен для tsc. */
import React, { createContext, useContext } from 'react';

export interface FormFieldContextProps {
    /** Размер. Выбирается из определённых в объекте темы */
    size: string;
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
