export type BreakpointItself = 'xxxxl' | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

export type BreakpointMap = PartialRecord<BreakpointItself, any>;

type MediaKey = `@media (max-width: ${number}px)`;
type MediaKeyMin = `@media (min-width: ${number}px)`;

/**
 * Creates a statically typed object representing media queries
 * given a map of breakpoints from tokens
 * @example
 * // scripts/gds.ts
 * import tokens from '../../../public/tokens.json';
 * const { breakpoints } = tokens.layout;
 * const MEDIA_QUERIES = createMediaQueries(breakpoints);
 * // ...
 * export {MEDIA_QUERIES };
 * @example
 * // components/Example/themes/basic/index.ts
 * import { MEDIA_QUERIES } from '@scripts/gds';
 * export const basicTheme: ExampleComponentTheme = {
 *  subComponent: {
 *    // statically typed
 *    [MEDIA_QUERIES.sm]: {
 *        width: '100%',
 *    }
 *  }
 * }
 * @param breakpoints breakpoints from tokens
 */
export const createMediaQueries = <T extends BreakpointMap>(breakpoints: T) => {
    type TKey = keyof T extends string ? keyof T : never;

    const queries = Object.entries(breakpoints).reduce(
        (acc, [name, value]) => ({
            ...acc,
            [name]: `@media (max-width: ${value - 1}px)`,
            [`${name}Min`]: `@media (min-width: ${value}px)`,
        }),
        {},
    );

    return queries as Record<TKey, MediaKey> & Record<`${TKey}Min`, MediaKeyMin>;
};
