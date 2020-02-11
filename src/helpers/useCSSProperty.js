import useTheme from '../utils/useTheme';
import baseTheme from '../utils/baseTheme';
import isObject from './isObject';
import toArray from './toArray';
import { BREAKPOINTS_NAMES } from './constants';

const useCSSProperty = ({ name, value, defaultProperty, condition, transform }) => {
    const { layout } = useTheme();
    const layoutTheme = layout || baseTheme.layout;

    let arr = toArray(value);

    if (arr.some(value => value === undefined) && defaultProperty) {
        arr = arr.map((value, index) => {
            if (value !== undefined) return value;
            if (!Array.isArray(defaultProperty)) return !index ? layoutTheme[defaultProperty] : value;
            return defaultProperty[index] ? layoutTheme[defaultProperty[index]] : value;
        });
    }

    if (arr.every(value => value === undefined)) return;
    if (condition !== undefined && !condition) return;

    const obj = arr.find(value => isObject(value));
    if (!obj) return setValue(name, arr, transform);

    return Object.keys(obj)
        .sort((a, b) => BREAKPOINTS_NAMES.indexOf(a) - BREAKPOINTS_NAMES.indexOf(b))
        .reduce((acc, bp) => {
            const nameIndex = BREAKPOINTS_NAMES.indexOf(bp);
            const nextBp = nameIndex !== -1 && BREAKPOINTS_NAMES[nameIndex - 1];
            const values = arr.map(value => (!isObject(value) ? value : value[bp]));
            const rule = setValue(name, values, transform);
            return {
                ...acc,
                ...(nextBp ? { [`@media (max-width: ${layoutTheme.breakpoints[nextBp] - 1}px)`]: rule } : rule),
            };
        }, {});
};

const setValue = (name, value, transform) => {
    if (value.length === 1) value = value[0];

    return {
        [name]: transform ? transform(value) : value,
    };
};

export default useCSSProperty;
