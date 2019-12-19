const colorToToken = require('./colorToToken');

const getColors = frame => {
    const tokens = frame.children
        .filter(({ type }) => type === 'FRAME')
        .reduce((acc, group) => {
            const groupTokens = group.children
                .filter(({ type }) => type === 'FRAME')
                .reduce((acc, color) => {
                    const colorName = color.children.find(({ type }) => type === 'FRAME').children[0].characters;

                    return {
                        ...acc,
                        [colorName]: colorToToken(color),
                    };
                }, {});

            return {
                ...acc,
                [group.name]: { ...groupTokens },
            };
        }, {});

    return tokens;
};

module.exports = getColors;
