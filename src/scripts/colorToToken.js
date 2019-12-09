import rgbToHex from './rgbToHex';

const colorToToken = color => {
    const rect = color.children.find(({ type }) => type === 'RECTANGLE');
    const { r, g, b } = rect.fills[0].color;
    const rgb = [r, g, b].map(num => Math.round(num * 255));
    return rgbToHex(...rgb);
};

export default colorToToken;
