import React from 'react';

import { CSSObject } from '@emotion/core';
import { useField, useFormikContext } from 'formik';
import { useForm } from './useForm';
import { useFormField } from './useFormField';
import { Radio } from '../Radio';

export interface FormRadioProps {
    /** Label content. */
    children: React.ReactNode;
    /** Additional CSS. */
    css?: CSSObject;
}

/**
 * FormLabel component.
 *
 * Render <label /> element. Can contain icons, error message and hint.
 *
 * Consume props from `Form` and `Form.Field` compoents.
 */
export const FormRadio = ({ children, css }: FormRadioProps) => {
    const { controlId, optional, size } = useFormField();
    const { errorPosition } = useForm();
    const [field, meta, helpers] = useField(controlId);
    const { values } = useFormikContext<any[]>();
    console.log(values);
    return (
        <Radio
            size={size}
            name={controlId}
            isOptional={Boolean(optional)}
            errorPosition={errorPosition}
            field={field}
            meta={meta}
            helpers={helpers}
            css={css}
        >
            {children}
        </Radio>
    );
};
export default FormRadio;
