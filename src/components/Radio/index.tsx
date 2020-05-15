import React from 'react';
import RadioItem, { RadioItemProps } from './Item';
import { RadioContext, RadioContextProps } from './useRadio';
import { FormError } from '../Legend/Error';
import { FormHint } from '../Legend/Hint';
import { FormikProps } from '../../components/Form';

export interface RadioCompositionProps {
    Item: React.FC<RadioItemProps>;
}

export interface RadioProps extends RadioContextProps {
    /** Name of radio */
    name: string;
    /** Set optional fill to fieldset. */
    isOptional?: boolean;
    /** Hint's positioning. */
    hintPosition?: 'top' | 'bottom';
    /** Hint text. */
    hint?: string;
    /** Formik props from cloneElement in Form.Field */
    formikProps?: FormikProps<string>;
}

export const Radio: React.FC<RadioProps> & RadioCompositionProps = ({
    children,
    name,
    hint,
    hintPosition,
    isOptional = false,
    orientation = 'vertical',
    alignment = 'top',
    position = 'side',
    size = 'md',
    defaultValue: initialSelectedValue,
    labelRight = true,
    formikProps,
    ...props
}) => {
    const fieldsetProps = {
        'aria-invalid': formikProps?.meta?.touched && formikProps?.meta?.error ? true : undefined,
        'aria-required': isOptional ? undefined : true,
    };
    size = formikProps?.size || size;
    hint = formikProps?.hint || hint;
    name = formikProps?.controlId || name;
    hintPosition = formikProps?.hintPosition || hintPosition;

    const [defaultValue, setSelectedValue] = React.useState(initialSelectedValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.currentTarget.value);
    };

    return (
        <RadioContext.Provider value={{ orientation, alignment, size, labelRight, position }}>
            <fieldset {...fieldsetProps}>
                <div>
                    {React.Children.map(children, (child) => {
                        const checked =
                            (formikProps?.values && name && formikProps?.values[name] === child?.props.value) ||
                            (defaultValue && defaultValue === child?.props.value) ||
                            false;

                        return React.cloneElement(child, {
                            size,
                            name,
                            formikProps,
                            checked,
                            onChange,
                            field: formikProps?.field,
                            ...props,
                        });
                    })}
                </div>
                {formikProps?.meta?.error && formikProps?.meta?.touched && formikProps?.errorPosition === 'bottom' && (
                    <FormError size={size} err={formikProps?.meta?.error} />
                )}
                {hint && hintPosition === 'bottom' && <FormHint size={size} hint={hint} hintPosition={hintPosition} />}
            </fieldset>
        </RadioContext.Provider>
    );
};

Radio.Item = RadioItem;

export default Radio;
