import { CSSObject } from '@emotion/core';
import useTheme from '../utils/useTheme';
import baseTheme from '../utils/baseTheme';
import isObject from './isObject';
import { BREAKPOINTS_NAMES } from './constants';
import { Breakpoint } from '../types/Layout';

/**
 * Calculate CSS Object from component props with `AllowMedia` type (user can pass object with breakpoints through prop). CSS property can be calculated based on multiple props.
 */
const useCSSProperty = <T>({
    name,
    props,
    condition,
    transform,
}: {
    /** CSS property name. */
    name: string;
    /** Component prop or array of props. */
    props: T;
    /** Add property only if condition equals `true`. */
    condition?: boolean;
    /** Transform function. Applies before property value assignment. */
    transform?: (props: Record<keyof T, any>) => string | number;
}): CSSObject | undefined => {
    const { layout } = useTheme();
    const layoutTheme = layout || baseTheme.layout;
    const breakpoints = layoutTheme.breakpoints;

    if (condition !== undefined && !condition) return;

    const propsValues = Object.values(props);
    const isUndefined = propsValues.every((value) => value === undefined);
    if (isUndefined) return;

    const mediaProp: Partial<Record<Breakpoint, any>> | undefined = propsValues.find((value) => isObject(value));
    if (!mediaProp) return setValue(name, props, transform);

    return (Object.keys(mediaProp) as Breakpoint[])
        .sort((a, b) => BREAKPOINTS_NAMES.indexOf(a) - BREAKPOINTS_NAMES.indexOf(b))
        .reduce((acc, bp) => {
            const nameIndex = BREAKPOINTS_NAMES.indexOf(bp);
            const nextBp = nameIndex !== -1 && BREAKPOINTS_NAMES[nameIndex - 1];
            const breakpointProps = Object.fromEntries(
                Object.entries(props).map(([key, value]) => [key, !isObject(value) ? value : value[bp]]),
            ) as Record<keyof T, any>;
            const rule = setValue(name, breakpointProps, transform);
            return {
                ...acc,
                ...(nextBp ? { [`@media (max-width: ${breakpoints[nextBp] - 1}px)`]: rule } : rule),
            };
        }, {});
};

const setValue = <T>(name: string, props: T, transform?: (props: T) => string | number) => {
    return {
        [name]: transform ? transform(props) : Object.values(props)[0],
    } as CSSObject;
};

export default useCSSProperty;
