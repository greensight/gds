import React, { createContext, useContext } from 'react';

export interface RadioContextProps {
    /** Orientation for Radio items. */
    orientation?: 'vertical' | 'horizontal';
    /** Vertical alignment for radio icon (for side position) */
    alignment?: 'top' | 'center' | 'bottom';
    /** Box position */
    position?: 'side' | 'top' | 'bottom';
    /** Default checked value. Use outside Form. */
    defaultValue?: string;
    /** Text position relative radio. */
    labelRight?: boolean;
    /** Size name from list of sizes defined in theme object at `components.RadioItem.sizes`. */
    size: string;
}

export const RadioContext = createContext<RadioContextProps | undefined>(undefined);

export const useRadio = (): RadioContextProps => {
    const context = useContext(RadioContext);

    if (!context) {
        throw new Error('This component must be used within a <Radio> component');
    }

    return context;
};

export default useRadio;
