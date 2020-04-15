import React, { createContext, useContext } from 'react';

export interface RadioContextProps {
    /** Orientation for Radio items. */
    orientation?: 'vertical' | 'horizontal';
    /** Vertical alignment for radio icon */
    alignment: 'top' | 'center' | 'bottom';
    /** Size name from list of sizes defined in theme object at `components.Button.sizes`. */
    size?: string;
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
