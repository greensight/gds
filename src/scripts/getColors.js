import colorToToken from './colorToToken';

const getColors = figmaTree => {
    /*
    Ожидаемая структура:
    Page: "Base"
    Frame: "Colors"
    Вложенные фреймы воспринимаются как группы
    Внутри групп идут фреймы цветов
    Внутри каждого цвета rectange с заливкой в выбранный цвет и фрейм с вложенной текстовой нодой с именем переменной в контенте
    */
    const colorsFrame = figmaTree.document.children
        .find(artboard => artboard.name === 'Base')
        .children.find(frame => frame.name === 'Colors');

    const tokens = colorsFrame.children
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

export default getColors;
