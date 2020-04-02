import * as React from 'react';
import { useContext, createContext, useEffect } from 'react';
import { Formik, Form as FormikForm, useFormikContext } from 'formik';
import FormLabel from './Label';
import FormField from './Field';
import FormInput, { FormInputProps } from './Input';
import FormTheme from '../../types/Form';

export interface FormCompositionProps {
    Input: React.FC<FormInputProps>;
}

interface IFormContext {
    /** Позиционирование ошибок валидации */
    errorPosition: 'top' | 'bottom';
    /** Переключение между обязательностью и опциональностью */
    required: 'optional' | 'mark';
    /** Иконка ошибки */
    ErrorIcon?: Function | React.Component;
    /** Иконка успешной валидации */
    SuccessIcon?: Function | React.Component;
    /** Показ успешной валидации */
    showSuccess: boolean;
    /** Объект темы кнопки. Для теста в Storybook, перезаписывает глобальный */
    themeObj?: FormTheme;
}

export interface FormProps extends IFormContext {
    /** Названия полей с начальными значениями */
    initialValues: Record<string, any>;
    /** Валидация через Yup */
    validationSchema?: Record<string, any>;
    /** Обработчик сабмита */
    onSubmit?: (values: FormikValues) => void;
}

const FormContext = createContext<IFormContext | undefined>(undefined);

export const useForm = (): IFormContext => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error('This component must be used within a <Form> component');
    }

    return context;
};

const FocusError = () => {
    const { errors, isSubmitting, isValidating } = useFormikContext();
    useEffect(() => {
        if (isSubmitting && !isValidating) {
            const keys = Object.keys(errors);
            if (keys.length > 0) {
                const selector = `[name=${keys[0]}]`;
                const errorElement = document.querySelector(selector) as HTMLElement;
                if (errorElement) {
                    errorElement.focus();
                }
            }
        }
    }, [errors, isSubmitting, isValidating]);

    return null;
};

export const Form: React.FC<IForm> = ({
    errorPosition = 'top',
    required = 'optional',
    ErrorIcon,
    showSuccess = true,
    SuccessIcon,
    initialValues,
    validationSchema,
    onSubmit,
    themeObj,
    children,
    ...props
}) => {
    return (
        <FormContext.Provider value={{ errorPosition, required, showSuccess, ErrorIcon, SuccessIcon, themeObj }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {() => (
                    <FormikForm noValidate {...props}>
                        {children}
                        <FocusError />
                    </FormikForm>
                )}
            </Formik>
        </FormContext.Provider>
    );
};

Form.Input = FormInput;
Form.Label = FormLabel;
Form.Field = FormField;

export default Form;
