const colorToToken = require('./colorToToken');

const getColors = (frame) => {
    const tokens = frame.children
        .filter(({ type }) => type === 'FRAME')
        .reduce((acc, color) => {
            const colorName = color.children.find(({ type }) => type === 'FRAME').children[0].characters;

            return {
                ...acc,
                [colorName]: colorToToken(color),
            };
        }, {});

    return tokens;
};

module.exports = getColors;
