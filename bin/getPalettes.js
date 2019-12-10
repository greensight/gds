const colorToToken = require('./colorToToken');

const getPalettes = figmaTree => {
    /*
    Ожидаемая структура:
    Page: "Base"
    Frame: "Palettes"
    Вложенные фреймы воспринимаются как палитры, не допускают доп. вложенностей
    Внутри фрейма палитры идут фреймы отдельных цветов
    Внутри каждого цвета rectange с заливкой в выбранный цвет
    */
    const palettesFrame = figmaTree.document.children
        .find(artboard => artboard.name === 'Base')
        .children.find(frame => frame.name === 'Palettes');

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
