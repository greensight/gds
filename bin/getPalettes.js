const colorToToken = require('./colorToToken');

const getPalettes = (frame) => {
    const tokens = frame.children.reduce((acc, palette) => {
        if (palette.type !== 'FRAME') return acc;
        return {
            ...acc,
            [palette.name]: palette.children.map((color) => colorToToken(color)),
        };
    }, {});

    return tokens;
};

module.exports = getPalettes;
