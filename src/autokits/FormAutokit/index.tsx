import React from 'react';
import Form from '../../components/Form';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import typography from '../../helpers/typography';
import useComponentTheme from '../../helpers/useComponentTheme';
import { FormInputTheme } from '../../types/Form';
import { SVGRIcon } from '../../types/Utils';
import { FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';

export interface FormAutokitProps {
    ErrorIcon?: SVGRIcon;
    SuccessIcon?: SVGRIcon;
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>;
}

const FormAutokit = ({ SuccessIcon, ErrorIcon, onSubmit }: FormAutokitProps) => {
    const theme = useTheme();
    const { componentTheme: componentInputTheme } = useComponentTheme('FormInput');
    const inputTheme = componentInputTheme as FormInputTheme;

    const PlaceholderErrorIcon = ErrorIcon || theme.global?.placeholder || baseTheme.global?.placeholder;
    const PlaceholderSuccessIcon = SuccessIcon || theme.global?.placeholder || baseTheme.global?.placeholder;
    const PlaceholderIcon = theme.global?.placeholder || baseTheme.global?.placeholder;
    const initialValues = {
        'field-1': 'Некое значение',
        'field-2': 'Некое значение',
        'field-3': 'Некое значение',
        'field-hint-1': '',
        'field-hint-2': '',
        'field-hint-3': '',
        'field-hintBottom-1': '',
        'field-hintBottom-2': '',
        'field-hintBottom-3': '',
        'field-hidden-1': '',
        'field-hidden-2': '',
        'field-hidden-3': '',
        'field-optional-1': '',
        'field-optional-2': '',
        'field-optional-3': '',
        'field-LabelIconBefore-1': '',
        'field-LabelIconBefore-2': '',
        'field-LabelIconBefore-3': '',
        'field-LabelIconAfter-1': '',
        'field-LabelIconAfter-2': '',
        'field-LabelIconAfter-3': '',
        'field-LabelIconBoth-1': '',
        'field-LabelIconBoth-2': '',
        'field-LabelIconBoth-3': '',
        'field-InputIconBefore-1': '',
        'field-InputIconBefore-2': '',
        'field-InputIconBefore-3': '',
        'field-InputIconAfter-1': '',
        'field-InputIconAfter-2': '',
        'field-InputIconAfter-3': '',
        'field-InputIconBoth-1': '',
        'field-InputIconBoth-2': '',
        'field-InputIconBoth-3': '',
        'field-validationLabelAfter-1': '',
        'field-validationLabelAfter-2': '',
        'field-validationLabelAfter-3': '',
        'field-validationLabelBefore-1': '',
        'field-validationLabelBefore-2': '',
        'field-validationLabelBefore-3': '',
        'field-validationInputAfter-1': '',
        'field-validationInputAfter-2': '',
        'field-validationInputAfter-3': '',
        'field-validationInputBefore-1': '',
        'field-validationInputBefore-2': '',
        'field-validationInputBefore-3': '',
    };
    const validationSchema = Yup.object().shape({
        'field-1': Yup.string().required('Обязательное поле'),
        'field-2': Yup.string().required('Обязательное поле'),
        'field-3': Yup.string().required('Обязательное поле'),
        'field-hint-1': Yup.string().required('Обязательное поле'),
        'field-hint-2': Yup.string().required('Обязательное поле'),
        'field-hint-3': Yup.string().required('Обязательное поле'),
        'field-hintBottom-1': Yup.string().required('Обязательное поле'),
        'field-hintBottom-2': Yup.string().required('Обязательное поле'),
        'field-hintBottom-3': Yup.string().required('Обязательное поле'),
        'field-hidden-1': Yup.string().required('Обязательное поле'),
        'field-hidden-2': Yup.string().required('Обязательное поле'),
        'field-hidden-3': Yup.string().required('Обязательное поле'),
        // 'field-optional-1': '',
        // 'field-optional-2': '',
        // 'field-optional-3': '',
        'field-LabelIconBefore-1': Yup.string().required('Обязательное поле'),
        'field-LabelIconBefore-2': Yup.string().required('Обязательное поле'),
        'field-LabelIconBefore-3': Yup.string().required('Обязательное поле'),
        'field-LabelIconAfter-1': Yup.string().required('Обязательное поле'),
        'field-LabelIconAfter-2': Yup.string().required('Обязательное поле'),
        'field-LabelIconAfter-3': Yup.string().required('Обязательное поле'),
        'field-LabelIconBoth-1': Yup.string().required('Обязательное поле'),
        'field-LabelIconBoth-2': Yup.string().required('Обязательное поле'),
        'field-LabelIconBoth-3': Yup.string().required('Обязательное поле'),
        'field-InputIconBefore-1': Yup.string().required('Обязательное поле'),
        'field-InputIconBefore-2': Yup.string().required('Обязательное поле'),
        'field-InputIconBefore-3': Yup.string().required('Обязательное поле'),
        'field-InputIconAfter-1': Yup.string().required('Обязательное поле'),
        'field-InputIconAfter-2': Yup.string().required('Обязательное поле'),
        'field-InputIconAfter-3': Yup.string().required('Обязательное поле'),
        'field-InputIconBoth-1': Yup.string().required('Обязательное поле'),
        'field-InputIconBoth-2': Yup.string().required('Обязательное поле'),
        'field-InputIconBoth-3': Yup.string().required('Обязательное поле'),
        'field-validationLabelAfter-1': Yup.string().required('Обязательное поле'),
        'field-validationLabelAfter-2': Yup.string().required('Обязательное поле'),
        'field-validationLabelAfter-3': Yup.string().required('Обязательное поле'),
        'field-validationLabelBefore-1': Yup.string().required('Обязательное поле'),
        'field-validationLabelBefore-2': Yup.string().required('Обязательное поле'),
        'field-validationLabelBefore-3': Yup.string().required('Обязательное поле'),
        'field-validationInputAfter-1': Yup.string().required('Обязательное поле'),
        'field-validationInputAfter-2': Yup.string().required('Обязательное поле'),
        'field-validationInputAfter-3': Yup.string().required('Обязательное поле'),
        'field-validationInputBefore-1': Yup.string().required('Обязательное поле'),
        'field-validationInputBefore-2': Yup.string().required('Обязательное поле'),
        'field-validationInputBefore-3': Yup.string().required('Обязательное поле'),
    });

    return (
        <Form
            SuccessIcon={PlaceholderSuccessIcon}
            ErrorIcon={PlaceholderErrorIcon}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Layout
                cols={{ xxxl: Object.keys(inputTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-${index + 1}`} size={sizeName}>
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Hint position</div>
            <Layout
                cols={{ xxxl: Object.keys(inputTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field
                        key={sizeName}
                        controlId={`field-hint-${index + 1}`}
                        size={sizeName}
                        hint="Подсказка к полю"
                    >
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field
                        controlId={`field-hintBottom-${index + 1}`}
                        key={sizeName}
                        size={sizeName}
                        hint="Подсказка к полю"
                        hintPosition="bottom"
                    >
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Hidden label</div>
            <Layout
                cols={{ xxxl: Object.keys(inputTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field
                        key={sizeName}
                        controlId={`field-hidden-${index + 1}`}
                        size={sizeName}
                        hiddenLabel={true}
                    >
                        <Form.Label>Скрытый лейбл</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Optional text</div>
            <Layout
                cols={{ xxxl: Object.keys(inputTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field
                        key={sizeName}
                        controlId={`field-optional-${index + 1}`}
                        size={sizeName}
                        optional="(необязательное поле)"
                    >
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Label icons</div>
            <Layout
                cols={{ xxxl: Object.keys(inputTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-LabelIconBefore-${index + 1}`} size={sizeName}>
                        <Form.Label IconBefore={PlaceholderIcon}>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-LabelIconAfter-${index + 1}`} size={sizeName}>
                        <Form.Label IconAfter={PlaceholderIcon}>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-LabelIconBoth-${index + 1}`} size={sizeName}>
                        <Form.Label IconBefore={PlaceholderIcon} IconAfter={PlaceholderIcon}>
                            Лейбл {sizeName}
                        </Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Input icons</div>
            <Layout
                cols={{ xxxl: Object.keys(inputTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-InputIconBefore-${index + 1}`} size={sizeName}>
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input IconBefore={PlaceholderIcon} />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-InputIconAfter-${index + 1}`} size={sizeName}>
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input IconAfter={PlaceholderIcon} />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-InputIconBoth-${index + 1}`} size={sizeName}>
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input IconAfter={PlaceholderIcon} IconBefore={PlaceholderIcon} />
                    </Form.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Validation Icon</div>
            <Layout
                cols={{ xxxl: Object.keys(inputTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field key={sizeName} controlId={`field-validationLabelAfter-${index + 1}`} size={sizeName}>
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field
                        key={sizeName}
                        controlId={`field-validationLabelBefore-${index + 1}`}
                        size={sizeName}
                        validationPosition="labelBefore"
                    >
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field
                        key={sizeName}
                        controlId={`field-validationInputAfter-${index + 1}`}
                        size={sizeName}
                        validationPosition="inputAfter"
                    >
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
                {Object.keys(inputTheme.sizes).map((sizeName, index) => (
                    <Form.Field
                        key={sizeName}
                        controlId={`field-validationInputBefore-${index + 1}`}
                        size={sizeName}
                        validationPosition="inputBefore"
                    >
                        <Form.Label>Лейбл {sizeName}</Form.Label>
                        <Form.Input />
                    </Form.Field>
                ))}
            </Layout>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default FormAutokit;
