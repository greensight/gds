/** Импорт React нужен для tsc. */
import React, { createContext, useContext } from 'react';
import { AllowMedia } from '../../types/Layout';

export interface LayoutContextProps {
    /** Layout type. Some properties are available only for one or another type. */
    type?: AllowMedia<'grid' | 'flex'>;
    /** Columns settings. */
    cols?: AllowMedia<number | string | Array<number | string>>;
    /** Gaps settings. */
    gap?: AllowMedia<number | string | [number | string, number | string]>;
    /** Minimum column size in auto mode. Auto mode allows to create columns of equal size without media queries. */
    auto?: AllowMedia<number>;
}

export const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayout = (): LayoutContextProps => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('This component must be used within a <Layout> component');
    }

    return context;
};
