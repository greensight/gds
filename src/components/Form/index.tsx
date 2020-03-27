import * as React from 'react';
import { useContext, createContext, useEffect } from 'react';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import typography from '@helpers/customTypography';
import { Formik, Form as FormikForm, useFormikContext } from 'formik';
import FormLabel from './Label';
import FormField, { useFormField } from './Field';
import FormInput from './Input';
import { IForm } from './Form';

const FormContext = createContext();

export const useForm = (): IForm => {
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

export const FormError: React.FC<IFormError> = ({ err, css, ...props }) => {
    const { size } = useFormField();
    const globalTheme = useTheme();
    const usedTheme = globalTheme.components?.Form.Error ? globalTheme : baseTheme;
    const errorTheme = usedTheme.components.Form.Error;

    if (!errorTheme.sizes[size]) {
        console.warn(`Specify "${size}" size. Default values are used instead`);
    }
    const getRule = (name, defaultValue) => {
        const sizeStyles = errorTheme.sizes[size];
        let sizeRule;
        if (sizeStyles) sizeRule = sizeStyles[name];

        const baseStyles = errorTheme.base;
        const baseRule = baseStyles?.[name];

        return sizeRule || baseRule || defaultValue;
    };
    const typographyName = getRule('typography');
    const typographyStyles = typographyName && typography(typographyName, usedTheme);
    const marginTop = getRule('marginTop', scale(1));
    const styles = [
        {
            display: 'block',
            color: errorTheme.color,
            marginTop,
            ...typographyStyles,
        },
        errorTheme.sizes?.[size]?.css,
        css,
    ];

    return (
        <span css={styles} {...props}>
            {err}
        </span>
    );
};

Form.Error = FormError;
Form.Input = FormInput;
Form.Label = FormLabel;
Form.Field = FormField;

export default Form;
