const NAMES = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
// TODO Подумать над порядкой имён - так или обратно
// TODO Где-то тут была завязка на индексах, можно упрочить проверку
// TODO Брать размеры брейкпоинтов из размеров элементов
// TODO Брать контейнер не по auto, а по тексту нечисленному
// TODO Предусмотреть контейнер с одной стороны
const getCols = frames => frames[0].children.filter(({ name }) => name === 'col').length;

const getContainer = frames => {
    const maxPaddingItem = frames[0].children.find(({ name }) => name === 'padding');
    return maxPaddingItem && maxPaddingItem.children[0].characters === 'auto'
        ? frames[0].name - maxPaddingItem.absoluteBoundingBox.width * 2
        : undefined;
};

const getBreakpoints = frames =>
    frames.reduce(
        (acc, frame, index) => ({
            ...acc,
            [NAMES[frames.length - index - 1]]: Number(frame.name),
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
            [NAMES[frames.length - index - 1]]: value,
        };
    }, {});

const getPadding = frames =>
    frames.reduce((acc, frame, index) => {
        const paddingItem = frame.children.find(({ name }) => name === 'padding');
        if (!paddingItem) return acc;

        const isAuto = paddingItem.children[0].characters === 'auto';
        const value = paddingItem.absoluteBoundingBox.width;
        const prev = Object.values(acc)[Object.values(acc).length - 1];
        if (isAuto || value === prev) return acc;

        return {
            ...acc,
            [NAMES[frames.length - index - 1]]: value,
        };
    }, {});

const getLayout = frame => {
    const frames = frame.children.filter(({ type }) => type === 'FRAME').sort((a, b) => b.name - a.name);

    const tokens = {
        cols: getCols(frames),
        container: getContainer(frames),
        breakpoints: getBreakpoints(frames),
        gap: getGap(frames),
        padding: getPadding(frames),
    };

    console.log(tokens);

    return tokens;
};

module.exports = getLayout;
