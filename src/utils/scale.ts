import { MAJOR_STEP_DEFAULT, MINOR_MAX } from '@helpers/constants';

const scale = (multiplier: number, isMinor?: boolean, customStep?: number) => {
    const majorStep = customStep || MAJOR_STEP_DEFAULT;

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
                `Minor scale is not defined on sizes bigger than 40px. Your value ${value} was rounded to ${roundedValue}.`,
            );
            value = roundedValue;
        }
    }

    return value;
};

export default scale;
