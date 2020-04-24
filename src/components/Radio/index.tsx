import React from 'react';
import RadioItem, { RadioItemProps } from './Item';
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
    /** Formik field object (inner) */
    field?: FieldInputProps<string[]>;
    /** Formik meta object (inner) */
    meta?: FieldMetaProps<string[]>;
    /** Formik helpers (inner) */
    helpers?: FieldHelperProps<string[]>;
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
    field,
    meta,
    helpers,
    ...props
}) => {
    const fieldsetProps = {
        'aria-invalid': meta?.touched && meta?.error ? true : undefined,
        'aria-required': isOptional ? undefined : true,
    };
    return (
        <RadioContext.Provider value={{ orientation, alignment, size }}>
            <fieldset {...fieldsetProps}>
                <div>
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                name,
                                field,
                                meta,
                                helpers,
                                ...props,
                            });
                        }
                    })}
                </div>
                {meta?.error && meta?.touched && props?.errorPosition === 'bottom' && <FormError err={meta?.error} />}
            </fieldset>
        </RadioContext.Provider>
    );
};

Radio.Item = RadioItem;

export default Radio;
