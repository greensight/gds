const MAX_VALUE = 40;

const minor = (multiplier, theme) => {
    const majorStep = theme ? theme.app.majorStep : 8;
    const minorStep = majorStep / 2;

    const truncatedMultiplier = Math.trunc(multiplier);
    if (!Number.isInteger(multiplier)) {
        console.warn(
            `Minor scale accepts only integers. Your value ${multiplier} was truncated to ${truncatedMultiplier}.`,
        );
    }

    let value = minorStep * truncatedMultiplier;
    if (value > MAX_VALUE) {
        const roundedValue = Math.trunc(value / majorStep) * majorStep;
        console.warn(
            `Minor scale is not defined on sizes bigger than 40px. Your value ${value} was rounded to ${roundedValue}.`,
        );
        value = roundedValue;
    }

    return value;
};

export default minor;
