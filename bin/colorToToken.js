const rgbToHex = (r, g, b) => {
    const numToHex = num => `0${num.toString(16)}`.slice(-2);
    return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
};

const colorToToken = color => {
    const rect = color.children.find(({ type }) => type === 'RECTANGLE');
    const { r, g, b } = rect.fills[0].color;
    const rgb = [r, g, b].map(num => Math.round(num * 255));
    return rgbToHex(...rgb);
};

module.exports = colorToToken;
