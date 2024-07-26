import { type ValueType } from '../../../types/scss/Layout';

export const gapTransform: ((value: ValueType) => ValueType) | undefined = (gapParam) => {
    if (Array.isArray(gapParam)) return `${gapParam[0]}px ${gapParam[1]}px`;
    return Number.isInteger(gapParam) ? `${gapParam}px` : gapParam;
};
