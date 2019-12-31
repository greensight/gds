import useTheme from './useTheme';
import isObject from './isObject';

// TODO Убрать отсюда NAMES
const NAMES = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

const useCSSProperty = ({ value, defaultProperty, condition, transform }) => {
    const { layout } = useTheme();

    if (value === undefined && defaultProperty) value = layout[defaultProperty];

    if (value === undefined || (condition !== undefined && !condition)) return;

    if (!isObject(value)) return setValue(value, transform);

    return Object.entries(value)
        .sort(([a], [b]) => NAMES.indexOf(b) - NAMES.indexOf(a))
        .reduce((acc, [bp, bpValue], index) => {
            const rule = setValue(bpValue, transform);
            return {
                ...acc,
                ...(index ? { [`@media (max-width: ${layout.breakpoints[bp] - 1}px)`]: rule } : rule),
            };
        }, {});
};

const setValue = (value, transform) => (transform ? transform(value) : value);

export default useCSSProperty;
