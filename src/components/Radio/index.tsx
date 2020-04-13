import React from 'react';
import Legend from '../Legend';
import RadioItem, { RadioItemProps } from './Item';

import { useField } from 'formik';
import VisuallyHidden from '../../components/VisuallyHidden';
import { useFormField } from '../Form/useFormField';
import { RadioContext, RadioContextProps } from './useRadio';

export interface RadioCompositionProps {
    Item: React.FC<RadioItemProps>;
}

export interface RadioProps extends RadioContextProps {
    /** Radio group name */
    name: string;
    /** Field legend */
    legend: string;
    /** Hint text */
    hint?: string;
}

export const Radio: React.FC<RadioProps> & RadioCompositionProps = ({
    children,
    legend,
    orientation = 'vertical',
    ...props
}) => {
    const { controlId, hiddenLabel, optional } = useFormField();
    const [field, meta, helpers] = useField(controlId);
    const fieldsetProps = {
        'aria-invalid': meta.touched && meta.error ? true : undefined,
        'aria-required': optional ? undefined : true,
    };
    return (
        <RadioContext.Provider value={{ orientation }}>
            <fieldset {...fieldsetProps}>
                {hiddenLabel ? (
                    <VisuallyHidden>
                        <Legend as="legend" label={legend} />
                    </VisuallyHidden>
                ) : (
                    <Legend as="legend" label={legend} />
                )}
                <div>
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                name: controlId,
                                field,
                                meta,
                                helpers,
                                ...props,
                            });
                        }
                    })}
                </div>
            </fieldset>
        </RadioContext.Provider>
    );
};

Radio.Item = RadioItem;

export default Radio;
