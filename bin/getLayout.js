const BREAKPOINTS_NAMES = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs', 'xxxs'];

const getBpWidth = frame =>
    parseInt(
        frame.children
            .filter(({ type }) => type === 'INSTANCE' || type === 'COMPONENT')
            .reduce((acc, instance) => acc + instance.absoluteBoundingBox.width, 0),
        10,
    );

const isAuto = padding => Number.isNaN(parseInt(padding.children[0].characters, 10));

const getMaxFixedBp = frames => {
    let maxFixedBp;
    frames.some((frame, index) => {
        const paddings = frame.children.filter(({ name }) => name === 'padding');
        if (!isAuto(paddings[0]) && !isAuto(paddings[1])) {
            maxFixedBp = BREAKPOINTS_NAMES[index];
            return true;
        }
        return false;
    });
    return maxFixedBp;
};

const getCols = frames =>
    frames.reduce((acc, frame, index) => {
        const value = frame.children.filter(({ name }) => name === 'col').length;
        const prev = Object.values(acc)[Object.values(acc).length - 1];
        if (value === prev) return acc;

        return {
            ...acc,
            [BREAKPOINTS_NAMES[index]]: value,
        };
    }, {});

const getContainer = frames => {
    const maxBpFrame = frames[0];
    const maxBpWidth = getBpWidth(maxBpFrame);
    const paddings = maxBpFrame.children.filter(({ name }) => name === 'padding');
    if (!isAuto(paddings[0]) && !isAuto(paddings[1])) return;

    return {
        [BREAKPOINTS_NAMES[0]]:
            maxBpWidth - paddings[0].absoluteBoundingBox.width - paddings[1].absoluteBoundingBox.width,
        [getMaxFixedBp(frames)]: 'none',
    };
};

const getMarginLeft = frames => {
    const maxBpFrame = frames[0];
    const paddings = maxBpFrame.children.filter(({ name }) => name === 'padding');
    if (!isAuto(paddings[0]) && !isAuto(paddings[1])) return;

    const autoPaddingsNum = paddings.reduce((acc, padding) => acc + Number(isAuto(padding)), 0);
    let margin;
    if (autoPaddingsNum === 1) {
        margin = paddings[0].absoluteBoundingBox.width;
    }

    return {
        [BREAKPOINTS_NAMES[0]]: margin || 'auto',
        [getMaxFixedBp(frames)]: 0,
    };
};

const getMarginRight = frames => {
    const maxBpFrame = frames[0];
    const paddings = maxBpFrame.children.filter(({ name }) => name === 'padding');
    if (!isAuto(paddings[0]) && !isAuto(paddings[1])) return;

    return {
        [BREAKPOINTS_NAMES[0]]: 'auto',
        [getMaxFixedBp(frames)]: 0,
    };
};

const getBreakpoints = frames =>
    frames.reduce(
        (acc, frame, index) => ({
            ...acc,
            [BREAKPOINTS_NAMES[index]]: getBpWidth(frame),
        }),
        {},
    );

const getGap = frames =>
    frames.reduce((acc, frame, index) => {
        const value = frame.children.find(({ name }) => name === 'gap').absoluteBoundingBox.width;
        const prev = Object.values(acc)[Object.values(acc).length - 1];
        if (value === prev) return acc;

        return {
            ...acc,
            [BREAKPOINTS_NAMES[index]]: value,
        };
    }, {});

const getPadding = frames =>
    frames.reduce((acc, frame, index) => {
        const padding = frame.children.filter(({ name }) => name === 'padding')[1];
        if (isAuto(padding)) return acc;

        const value = padding.absoluteBoundingBox.width;
        const prev = Object.values(acc)[Object.values(acc).length - 1];
        if (value === prev) return acc;

        return {
            ...acc,
            [BREAKPOINTS_NAMES[index]]: value,
        };
    }, {});

const getLayout = frame => {
    const frames = frame.children.filter(({ type }) => type === 'FRAME').sort((a, b) => getBpWidth(b) - getBpWidth(a));
    const tokens = {
        cols: getCols(frames),
        container: getContainer(frames),
        marginLeft: getMarginLeft(frames),
        marginRight: getMarginRight(frames),
        breakpoints: getBreakpoints(frames),
        gap: getGap(frames),
        padding: getPadding(frames),
    };

    return tokens;
};

module.exports = getLayout;
