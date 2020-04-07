import React from 'react';
import Form from '../../components/Form';
import Layout from '../../components/Layout';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import typography from '../../helpers/typography';
import useComponentTheme from '../../helpers/useComponentTheme';
import FormTheme, { FormInputTheme, FormLabelTheme } from '../../types/Form';
import { SVGRIcon } from '../../types/Utils';

export interface FormAutokitProps {
    ErrorIcon?: SVGRIcon;
    SuccessIcon?: SVGRIcon;
}

const FormAutokit = ({ ErrorIcon, SuccessIcon }: FormAutokitProps) => {
    const theme = useTheme();
    const { componentTheme: componentFormTheme } = useComponentTheme('Form');
    const formTheme = componentFormTheme as FormTheme;

    const { componentTheme: componentInputTheme } = useComponentTheme('FormInput');
    const inputTheme = componentInputTheme as FormInputTheme;

    const PlaceholderErrorIcon = ErrorIcon || theme.global?.placeholder || baseTheme.global?.placeholder;
    const PlaceholderSuccessIcon = SuccessIcon || theme.global?.placeholder || baseTheme.global?.placeholder;
    const PlaceholderIcon = theme.global?.placeholder || baseTheme.global?.placeholder;

    return (
        <Form SuccessIcon={PlaceholderSuccessIcon} ErrorIcon={PlaceholderErrorIcon}>
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
        </Form>
    );
};

export default FormAutokit;
