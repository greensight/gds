import React from 'react';
import { FieldMetaProps, FieldHelperProps, FieldInputProps } from 'formik';
import RadioItem, { RadioItemProps } from './Item';
import { RadioContext, RadioContextProps } from './useRadio';
import { FormError } from '../Legend/Error';
import { FormHint } from '../Legend/Hint';

export interface RadioCompositionProps {
    Item: React.FC<RadioItemProps>;
}

export interface RadioProps extends RadioContextProps {
    /** Formik field object (inner) */
    field?: FieldInputProps<string[]>;
    /** Formik meta object (inner) */
    meta?: FieldMetaProps<string[]>;
    /** Formik helpers (inner) */
    helpers?: FieldHelperProps<string[]>;
    /** Name of radio */
    name: string;
    /** Set optional fill to fieldset. */
    isOptional?: boolean;
    /** Radio content. */
    children: React.ReactNode;
}

export const Radio: React.FC<RadioProps> & RadioCompositionProps = ({
    children,
    name,
    hint,
    hintPosition,
    isOptional = false,
    orientation = 'vertical',
    alignment = 'top',
    size = 'md',
    defaultValue = '',
    labelRight = true,
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
        <RadioContext.Provider value={{ orientation, alignment, size, labelRight, defaultValue }}>
            <fieldset {...fieldsetProps}>
                <div>
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                size,
                                hint,
                                hintPosition,
                                name,
                                field,
                                meta,
                                helpers,
                                ...props,
                            });
                        }
                    })}
                </div>
                {meta?.error && meta?.touched && props?.errorPosition === 'bottom' && (
                    <FormError size={size} err={meta?.error} />
                )}
                {hint && hintPosition === 'bottom' && <FormHint size={size} hint={hint} hintPosition={hintPosition} />}
            </fieldset>
        </RadioContext.Provider>
    );
};

Radio.Item = RadioItem;

export default Radio;
