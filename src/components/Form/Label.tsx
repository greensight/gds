import React from 'react';

import { CSSObject } from '@emotion/core';
import { useField } from 'formik';
import { useForm } from './useForm';
import { useFormField } from './useFormField';
import Legend from '../Legend';

export interface FormLabelProps {
    /** Icon after text. Accepts SVGR icon or custom JSX. */
    IconAfter?: SVGRIcon;
    /** Icon before text. Accepts SVGR icon or custom JSX. */
    IconBefore?: SVGRIcon;
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
export const FormLabel = ({ IconBefore, IconAfter, children, css }: FormLabelProps) => {
    const { controlId, optional, size, validationPosition, hiddenLabel, hint, hintPosition } = useFormField();
    const { errorPosition, required, ErrorIcon, showSuccess, SuccessIcon } = useForm();
    const [, meta] = useField(controlId);

    return (
        <Legend
            size={size}
            name={controlId}
            optional={optional}
            errorPosition={errorPosition}
            meta={meta}
            validationPosition={validationPosition}
            hiddenLegend={hiddenLabel}
            hint={hint}
            hintPosition={hintPosition}
            required={required}
            ErrorIcon={ErrorIcon}
            showSuccess={showSuccess}
            SuccessIcon={SuccessIcon}
            IconAfter={IconAfter}
            IconBefore={IconBefore}
            css={css}
        >
            {children}
        </Legend>
    );
};
export default FormLabel;
