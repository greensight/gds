const colorToToken = require('./colorToToken');

const getPalettes = page => {
    const palettesFrame = page.children.find(frame => frame.name === 'Palettes');

    const tokens = palettesFrame.children
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
