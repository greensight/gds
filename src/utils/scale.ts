import { MAJOR_STEP, MINOR_MAX } from '../helpers/constants';

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
export const scale = (multiplier: number, isMinor?: boolean, customStep?: number): number => {
    const majorStep = customStep || MAJOR_STEP;

    const truncatedMultiplier = Math.trunc(multiplier);
    if (!Number.isInteger(multiplier)) {
        console.warn(
            `Spacings scale accepts only integers. Your value ${multiplier} was truncated to ${truncatedMultiplier}.`,
        );
    }

    let value;
    if (!isMinor) {
        value = majorStep * truncatedMultiplier;
    } else {
        const minorStep = majorStep / 2;
        value = minorStep * truncatedMultiplier;
        if (value > MINOR_MAX) {
            const roundedValue = Math.trunc(value / majorStep) * majorStep;
            console.warn(
                `Minor scale is not defined on sizes bigger than ${MINOR_MAX}px. Your value ${value} was rounded to ${roundedValue}.`,
            );
            value = roundedValue;
        }
    }

    return value;
};
