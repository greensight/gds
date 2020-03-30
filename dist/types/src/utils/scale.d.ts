/**
 * Helper for scaling system usage. Pass `multiplier` to use major scale: values multiple 8. Pass `multiplier` and `isMinor` flag to use minor scale: values less than 40 multiple 4.
 *
 * You can define your own step with `customStep` argument but it must be done once per project. For example with step equals 10 major scale allows to use values multiple 10 and minor scale allows to use values less than 40 multiple 5. Recommended way to do this is define wrapper with your step as third argument:
 *
 * ```
 * import { scale as scaleHelper } from '@greensight/gds';
 * import { MAJOR_STEP } from '@scripts/constants';
 *
 * const scale = (multiplier: number, isMinor?: boolean) => scaleHelper(multiplier, isMinor, MAJOR_STEP);
 *
 * export default scale;
 * ```
 */
declare const scale: (multiplier: number, isMinor?: boolean | undefined, customStep?: number | undefined) => number;
export default scale;
