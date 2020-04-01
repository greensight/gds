import * as React from 'react';
import FormComponent from '@components/Form';
import Layout from '@components/Layout';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import typography from '@helpers/customTypography';
import IForm from './Form';

const Form: React.FC<IForm> = ({}) => {
    const theme = useTheme();
    const formTheme = theme.components?.Form || baseTheme.components.Form;
    const Icon = Icon || theme.placeholder || baseTheme.placeholder;
    const SuccessIcon = theme.success;
    const ErrorIcon = theme.error;
    return (
        <FormComponent SuccessIcon={SuccessIcon} ErrorIcon={ErrorIcon}>
            <Layout
                cols={{ xxxl: Object.keys(formTheme.Input.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field key={sizeName} controlId={`field-${index + 1}`} size={sizeName}>
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Hint position</div>
            <Layout
                cols={{ xxxl: Object.keys(formTheme.Input.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-hint-${index + 1}`}
                        size={sizeName}
                        hint="Подсказка к полю"
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        controlId={`field-hintBottom-${index + 1}`}
                        key={sizeName}
                        size={sizeName}
                        hint="Подсказка к полю"
                        hintPosition="bottom"
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Hidden label</div>
            <Layout
                cols={{ xxxl: Object.keys(formTheme.Input.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-hidden-${index + 1}`}
                        size={sizeName}
                        hiddenLabel={true}
                    >
                        <FormComponent.Label>Скрытый лейбл</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Optional text</div>
            <Layout
                cols={{ xxxl: Object.keys(formTheme.Input.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-optional-${index + 1}`}
                        size={sizeName}
                        optional="(необязательное поле)"
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Label icons</div>
            <Layout
                cols={{ xxxl: Object.keys(formTheme.Input.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-LabelIconBefore-${index + 1}`}
                        size={sizeName}
                    >
                        <FormComponent.Label IconBefore={Icon}>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field key={sizeName} controlId={`field-LabelIconAfter-${index + 1}`} size={sizeName}>
                        <FormComponent.Label IconAfter={Icon}>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field key={sizeName} controlId={`field-LabelIconBoth-${index + 1}`} size={sizeName}>
                        <FormComponent.Label IconBefore={Icon} IconAfter={Icon}>
                            Лейбл {sizeName}
                        </FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Input icons</div>
            <Layout
                cols={{ xxxl: Object.keys(formTheme.Input.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-InputIconBefore-${index + 1}`}
                        size={sizeName}
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input IconBefore={Icon} />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field key={sizeName} controlId={`field-InputIconAfter-${index + 1}`} size={sizeName}>
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input IconAfter={Icon} />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field key={sizeName} controlId={`field-InputIconBoth-${index + 1}`} size={sizeName}>
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input IconAfter={Icon} IconBefore={Icon} />
                    </FormComponent.Field>
                ))}
            </Layout>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>Validation Icon</div>
            <Layout
                cols={{ xxxl: Object.keys(formTheme.Input.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-validationLabelAfter-${index + 1}`}
                        size={sizeName}
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-validationLabelBefore-${index + 1}`}
                        size={sizeName}
                        validationPosition="labelBefore"
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-validationInputAfter-${index + 1}`}
                        size={sizeName}
                        validationPosition="inputAfter"
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
                {Object.keys(formTheme.Input.sizes).map((sizeName, index) => (
                    <FormComponent.Field
                        key={sizeName}
                        controlId={`field-validationInputBefore-${index + 1}`}
                        size={sizeName}
                        validationPosition="inputBefore"
                    >
                        <FormComponent.Label>Лейбл {sizeName}</FormComponent.Label>
                        <FormComponent.Input />
                    </FormComponent.Field>
                ))}
            </Layout>
        </FormComponent>
    );
};

export default Form;
