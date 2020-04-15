import React from 'react';
import RadioItem, { RadioItemProps } from './Item';
import { useForm } from '../Form/useForm';
import { useField } from 'formik';
import { useFormField } from '../Form/useFormField';
import { RadioContext, RadioContextProps } from './useRadio';
import { FormError } from '../Form/Error';

export interface RadioCompositionProps {
    Item: React.FC<RadioItemProps>;
}

export interface RadioProps extends RadioContextProps {
    /** Field legend. */
    legend: string;
    /** Hint text. */
    hint?: string;
    /** Radio content. */
    children: React.ReactNode;
}

export const Radio: React.FC<RadioProps> & RadioCompositionProps = ({
    children,
    name,
    isOptional = false,
    orientation = 'vertical',
    alignment = 'top',
    size = 'md',
    ...props
}) => {
    const radioControlId = useFormField()?.controlId || name,
        radioOptional = useFormField()?.optional || isOptional,
        radioSize = useFormField()?.size || size,
        errorPosition = useForm()?.errorPosition;

    const needForm = typeof useForm() !== 'undefined' ? true : false;

    const [field, meta, helpers] = needForm ? useField(radioControlId) : [undefined, undefined, undefined];
    const fieldsetProps = {
        'aria-invalid': meta?.touched && meta?.error ? true : undefined,
        'aria-required': needForm && radioOptional ? undefined : true,
    };
    return (
        <RadioContext.Provider value={{ orientation, alignment, size: radioSize }}>
            <fieldset {...fieldsetProps}>
                <div>
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                name: radioControlId,
                                field,
                                meta,
                                helpers,
                                ...props,
                            });
                        }
                    })}
                </div>
                {meta?.error && meta?.touched && errorPosition === 'bottom' && <FormError err={meta?.error} />}
            </fieldset>
        </RadioContext.Provider>
    );
};

Radio.Item = RadioItem;

export default Radio;
