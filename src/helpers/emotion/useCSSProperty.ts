import { CSSObject } from '@emotion/react';
import { useMemo } from 'react';

import { Breakpoint } from '../../types/emotion/Layout';
import { baseTheme } from '../../utils/emotion/baseTheme';
import { useTheme } from '../../utils/emotion/useTheme';
import { BREAKPOINTS_NAMES } from '../common/constants';
import { isObject } from '../common/isObject';

const BREAKPOINT_INDICES = new Map<string, number>();
BREAKPOINTS_NAMES.forEach((e, i) => BREAKPOINT_INDICES.set(e, i));

/**
 * Calculate CSS Object from component props with `AllowMedia` type (user can pass object with breakpoints through prop). CSS property can be calculated based on multiple props.
 */
export const useCSSProperty = <T extends Record<string, any>>({
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

    return useMemo(() => {
        if (condition !== undefined && !condition) return;

        const propsValues = Object.values(props);
        const isUndefined = propsValues.every((value) => value === undefined);
        if (isUndefined) return;

        const mediaProp = propsValues.find((value) => isObject(value));
        if (!mediaProp) return setValue(name, props, transform);

        return (Object.keys(mediaProp) as Breakpoint[])
            .sort((a, b) => BREAKPOINT_INDICES.get(a)! - BREAKPOINT_INDICES.get(b)!)
            .reduce((acc, bp) => {
                const nameIndex = BREAKPOINT_INDICES.get(bp)!;
                const nextBp = nameIndex !== -1 && BREAKPOINTS_NAMES[nameIndex - 1];

                const breakpointProps = {} as Record<keyof T, any>;
                for (const key in props) {
                    const value = props[key];
                    breakpointProps[key] = !isObject(value) ? value : value[bp];
                }

                const rule = setValue(name, breakpointProps, transform);

                return {
                    ...acc,
                    ...(nextBp ? { [`@media (max-width: ${breakpoints[nextBp] - 1}px)`]: rule } : rule),
                };
            }, {});
    }, [breakpoints, condition, name, props, transform]);
};

const setValue = <T extends Record<string, any>>(name: string, props: T, transform?: (props: T) => string | number) => {
    return {
        [name]: transform ? transform(props) : Object.values(props)[0],
    } as CSSObject;
};
