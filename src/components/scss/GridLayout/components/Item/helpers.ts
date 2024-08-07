import { type ValueType } from '../../../../../types/scss/Layout';

export const colTransform: ((value: ValueType) => ValueType) | undefined = (colParam) => {
    if (Array.isArray(colParam)) return `${colParam[0]} / ${colParam[1]}`;
    if (Number.isInteger(colParam)) return `span ${colParam}`;
    return colParam;
};

export const rowTransform: ((value: ValueType) => ValueType) | undefined = (rowParam) => {
    if (Array.isArray(rowParam)) return `${rowParam[0]} / ${rowParam[1]}`;
    if (Number.isInteger(rowParam)) return `span ${rowParam}`;
    return rowParam;
};

export const orderTransform: ((value: ValueType) => ValueType) | undefined = (orderParam) => {
    if (Number.isInteger(orderParam)) return `${orderParam}`;
    return orderParam;
};
