import { ValueType } from '../../../../../types/scss/Layout';

export const orderTransform: ((value: ValueType) => ValueType) | undefined = (orderParam) => {
    if (Number.isInteger(orderParam)) return `${orderParam}`;
    return orderParam;
};
