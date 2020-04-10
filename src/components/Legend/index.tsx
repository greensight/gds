import * as React from 'react';
import { Form } from '../Form';
import { FieldMetaProps, FormikValues, FieldHelperProps, FieldInputProps } from 'formik';
import { MergeElementProps } from '../../types/Utils';
import { jsx } from '@emotion/core';
import { useForm } from '../Form/useForm';
import { useFormField } from '../Form/useFormField';
import { FormHint } from '../Form/Hint';

export interface LegendBaseProps {
    /** Label for Legend */
    label: string;
    /** Flag required for forms */
    required?: boolean;
    /** Hint for legend */
    hint?: string;
    /** Formik meta object (inner) */
    meta?: FieldMetaProps<string[]>;
    /** All values from Formik */
    values?: FormikValues;
    /** Formik helpers (inner) */
    helpers?: FieldHelperProps<string[]>;
    /** Type for form */
    type?: string;
    /** Formik field object (inner) */
    field?: FieldInputProps<string[]>;
}

export type LegendProps<P extends React.ElementType = 'label'> = {
    /** Use your own React component for render.*/
    as?: P;
} & MergeElementProps<P, LegendBaseProps>;

export const Legend = <T extends React.ElementType = 'label'>({ as, label, meta, ...props }: LegendProps<T>) => {
    delete props.values;
    delete props.field;
    delete props.helpers;
    delete props.type;

    const { hint, optional } = useFormField();
    const { required } = useForm();

    return jsx(
        as || 'label',
        { ...props },
        <>
            <span>
                {label}
                {optional && required === 'optional' && <span css={optionalStyles}>{optional}</span>}
                {!optional && required === 'mark' && !hiddenLabel && (
                    <span css={markStyles} aria-hidden="true">
                        *
                    </span>
                )}
            </span>
            {hint && <FormHint hint={hint} />}
            {meta?.error && meta?.touched && <Form.Error err={meta?.error} />}
        </>,
    );
};

export default Legend;
