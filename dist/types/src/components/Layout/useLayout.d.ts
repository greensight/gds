/** Импорт React нужен для tsc. */
import React from 'react';
import { AllowMedia } from '../../types/Types';
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
export declare const LayoutContext: React.Context<LayoutContextProps | undefined>;
export declare const useLayout: () => LayoutContextProps;
export default useLayout;
