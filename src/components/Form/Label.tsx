import React from 'react';

import { CSSObject } from '@emotion/core';
import { useField } from 'formik';
import { useForm } from './useForm';
import { useFormField } from './useFormField';
import Legend from '../Legend';

export interface FormLabelBaseProps {
    /** Icon after text. Accepts SVGR icon or custom JSX. */
    IconAfter?: SVGRIcon;
    /** Icon before text. Accepts SVGR icon or custom JSX. */
    IconBefore?: SVGRIcon;
    /** Block type. Use 100% of parent width. */
    block?: boolean;
    /** Label content. */
    children: React.ReactNode;
    /** Additional CSS. */
    css?: CSSObject;
}

export type FormLabelProps<P extends React.ElementType = 'label'> = {
    /** Use your own React component for render.*/
    as?: P;
} & MergeElementProps<P, FormLabelBaseProps>;

/**
 * FormLabel component.
 *
 * Render Legend component. Can contain icons, error message and hint.
 *
 * Consume props from `Form` and `Form.Field` compoents.
 */
export const FormLabel = ({ as, IconBefore, IconAfter, block, children, css }: FormLabelProps) => {
    const {
        controlId,
        optional,
        size,
        validationPosition,
        hiddenLabel,
        hint,
        hintPosition,
        __errorTheme,
        __hintTheme,
    } = useFormField();
    const { errorPosition, required, ErrorIcon, showSuccess, SuccessIcon } = useForm();
    const [, meta] = useField(controlId);

    return (
        <Legend
            as={as}
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
            block={block}
            __hintTheme={__hintTheme}
            __errorTheme={__errorTheme}
            css={css}
        >
            {children}
        </Legend>
    );
};
export default FormLabel;
