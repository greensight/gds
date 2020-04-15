import React, { createContext, useContext } from 'react';

export interface LegendContextProps {
    /** Size name from list of sizes defined in theme object at `components.FormLabel.sizes`. */
    size: string;
    /** Hint text. */
    hint?: string;
    /** Set `htmlFor` if Legend use as label. */
    name: string;
    /** Visually hidden label. Keeps text accessible. */
    hiddenLegend?: boolean;
}

export const LegendContext = createContext<LegendContextProps | undefined>(undefined);

export const useLegend = (): LegendContextProps => {
    const context = useContext(LegendContext);

    // if (!context) {
    //     throw new Error('This component must be used within a <FormField> component');
    // }

    return context;
};

export default useLegend;
