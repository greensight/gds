import { CSSObject } from '@emotion/core';
/**
 * Calculate CSS Object from component props with `AllowMedia` type (user can pass object with breakpoints through prop). CSS property can be calculated based on multiple props.
 */
declare const useCSSProperty: <T>({ name, props, condition, transform, }: {
    /** CSS property name. */
    name: string;
    /** Component prop or array of props. */
    props: T;
    /** Add property only if condition equals `true`. */
    condition?: boolean | undefined;
    /** Transform function. Applies before property value assignment. */
    transform?: ((props: Record<keyof T, any>) => string | number) | undefined;
}) => CSSObject | undefined;
export default useCSSProperty;
