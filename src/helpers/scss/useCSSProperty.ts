import { useMemo } from 'react';

import { type AllowMedia, type Breakpoint, type ValueType } from '../../types/scss/Layout';
import { BREAKPOINTS_NAMES } from '../common/constants';

const BREAKPOINT_INDICES = new Map<string, number>();
BREAKPOINTS_NAMES.forEach((e, i) => BREAKPOINT_INDICES.set(e, i));
export const isObject = (item: AllowMedia<ValueType>) =>
    typeof item === 'object' && !Array.isArray(item) && item !== null;

const setValue = <T extends ValueType>(value: T, transform?: (value: T) => ValueType | undefined) =>
    transform ? transform(value) : value;

/**
 * Calculate CSS Object from component props with `AllowMedia` type (user can pass object with breakpoints through prop). CSS property can be calculated based on multiple props.
 */
export const useCSSProperty = <T extends AllowMedia<ValueType>>({
    value,
    transform,
}: {
    /** Component value or array of values. */
    value?: T;
    /** Transform function. Applies before property value assignment. */
    transform?: (value: ValueType) => ValueType;
}): Partial<Record<Breakpoint, ValueType>> | undefined =>
    useMemo(() => {
        if (!value) return;

        const isObj = isObject(value);
        if (!isObj) return { xxxl: setValue(value as ValueType, transform) };

        return (Object.keys(value) as Breakpoint[])
            .sort((a, b) => BREAKPOINT_INDICES.get(a)! - BREAKPOINT_INDICES.get(b)!)
            .reduce(
                (acc, bp) => {
                    const nameIndex = BREAKPOINT_INDICES.get(bp)!;
                    const nextBp = nameIndex !== -1 && BREAKPOINTS_NAMES[nameIndex];
                    const rule = setValue((value as Record<Breakpoint, ValueType>)[bp], transform);

                    return {
                        ...acc,
                        [nextBp || 'xxxl']: rule,
                    };
                },
                {} as Partial<Record<Breakpoint, ValueType>>,
            );
    }, [value, transform]);
