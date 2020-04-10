import * as React from 'react';
import { MergeElementProps } from '../../types/Utils';
import { jsx } from '@emotion/core';
import FormLabel from '../Form/Label';

export interface LegendBaseProps {
    /** Label for Legend */
    label: string;
}

export type LegendProps<P extends React.ElementType = 'label'> = {
    /** Use your own React component for render.*/
    as?: P;
} & MergeElementProps<P, LegendBaseProps>;

export const Legend = <T extends React.ElementType = 'label'>({ as, label, ...props }: LegendProps<T>) => {
    return jsx(
        as || 'label',
        { ...props },
        <>
            <FormLabel>{label}</FormLabel>
        </>,
    );
};

export default Legend;
