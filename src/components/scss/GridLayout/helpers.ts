import { type ValueType } from '../../../types/scss/Layout';

export const colsTransform: ((value: ValueType) => ValueType) | undefined = (colsParam) => {
    if (Array.isArray(colsParam)) return colsParam.map((val) => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
    if (Number.isInteger(colsParam)) return `repeat(${colsParam}, 1fr)`;
    return colsParam;
};

export const rowsTransform: ((value: ValueType) => ValueType) | undefined = (rowsParam) => {
    if (Array.isArray(rowsParam)) return rowsParam.map((val) => (Number.isInteger(val) ? `${val}fr` : val)).join(' ');
    if (Number.isInteger(rowsParam)) return `repeat(${rowsParam}, 1fr)`;
    return rowsParam;
};

export const gapTransform: ((value: ValueType) => ValueType) | undefined = (gapParam) => {
    if (Array.isArray(gapParam)) return `${gapParam[0]}px ${gapParam[1]}px`;
    return Number.isInteger(gapParam) ? `${gapParam}px` : gapParam;
};
