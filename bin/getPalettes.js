const colorToToken = require('./colorToToken');

const getPalettes = frame => {
    const tokens = frame.children
        .filter(({ type }) => type === 'FRAME')
        .reduce(
            (acc, palette) => ({
                ...acc,
                [palette.name]: palette.children.map(color => colorToToken(color)),
            }),
            {},
        );

    return tokens;
};

module.exports = getPalettes;
