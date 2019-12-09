const rgbToHex = (r, g, b) => {
    const numToHex = num => `0${num.toString(16)}`.slice(-2);
    return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
};

export default rgbToHex;
