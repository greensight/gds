const rgbToHex = (r, g, b) => {
    const numToHex = num => `0${num.toString(16)}`.slice(-2);
    return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
};

const colorToToken = color => {
    const rect = color.children.find(({ type }) => type === 'RECTANGLE');
    const { opacity } = rect.fills[0];
    const { r, g, b } = rect.fills[0].color;
    const rgb = [r, g, b].map(num => Math.round(num * 255));
    return opacity ? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})` : rgbToHex(...rgb);
};

module.exports = colorToToken;
