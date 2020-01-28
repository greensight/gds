const getShadows = frame => {
    const tokens = frame.children
        .filter(({ type }) => type === 'FRAME')
        .reduce((acc, shadow) => {
            const shadowName = shadow.children.find(({ type }) => type === 'FRAME').children[0].characters;
            const rect = shadow.children.find(({ type }) => type === 'RECTANGLE');

            const boxShadow = rect.effects
                .filter(({ type }) => ['DROP_SHADOW', 'INNER_SHADOW'].includes(type))
                .map(({ type, color, offset, radius }) => {
                    const inset = type === 'INNER_SHADOW' ? 'inset ' : '';
                    const rgbaValues = Object.entries(color).map(([name, value]) =>
                        name !== 'a' ? Math.round(value * 255) : Math.round(value * 100) / 100,
                    );
                    const sizes = [offset.x, offset.y, radius].map(size => (size ? `${size}px` : size)).join(' ');
                    const rgba = ` rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${rgbaValues[3]})`;
                    return `${inset}${sizes}${rgba}`;
                })
                .join(', ');

            return {
                ...acc,
                [shadowName]: boxShadow,
            };
        }, {});

    return tokens;
};

module.exports = getShadows;
