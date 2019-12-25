const major = (multiplier, theme) => {
    const majorStep = theme ? theme.app.majorStep : 8;

    const truncatedMultiplier = Math.trunc(multiplier);
    if (!Number.isInteger(multiplier)) {
        console.warn(
            `Major scale accepts only integers. Your value ${multiplier} was truncated to ${truncatedMultiplier}.`,
        );
    }

    return majorStep * truncatedMultiplier;
};

export default major;
