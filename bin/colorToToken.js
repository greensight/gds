const rgbToHex = (r, g, b) => {
    const numToHex = (num) => `0${num.toString(16)}`.slice(-2);
    return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
};

const getSolidColor = ({ opacity, r, g, b }) => {
    const rgb = [r, g, b].map((num) => Math.round(num * 255));
    return opacity < 1 ? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})` : rgbToHex(...rgb);
};

const getAngelDeg = (gradientHandlePositions, adjustemntDeg = 0) => {
    const angleRad = Math.atan(
        gradientHandlePositions[1].y - gradientHandlePositions[0].y,
        gradientHandlePositions[1].x - gradientHandlePositions[0].x,
    );

    return Math.round((angleRad * 180) / Math.PI) + adjustemntDeg;
};

const getMappedColors = (gradientStops) =>
    gradientStops
        .reduce((acc, item) => {
            const position = Number((item.position * 100).toFixed(1));

            return [
                ...acc,
                `${getSolidColor({
                    opacity: item.color.a,
                    r: item.color.r,
                    g: item.color.g,
                    b: item.color.b,
                })}${position > 0 && position < 100 ? ` ${position}%` : ''}`,
            ];
        }, '')
        .join(', ');

const getGradientCenterCoordinates = (gradientHandlePositions) => {
    // Coordinates of the center position
    const x0 = gradientHandlePositions[0].x;
    const y0 = gradientHandlePositions[0].y;

    const centerX = (x0 * 100).toFixed(2);
    const centerY = (y0 * 100).toFixed(2);

    return { centerX, centerY };
};

const getGradientLinerColor = (rect) => {
    const { gradientHandlePositions, gradientStops } = rect.fills[0];

    const angleDeg = getAngelDeg(gradientHandlePositions, 90);

    const colorString = getMappedColors(gradientStops);

    return `linear-gradient(${angleDeg}deg, ${colorString})`;
};

const getGradientRadius = (gradientHandlePositions) => {
    // Coordinates of the center position
    const x0 = gradientHandlePositions[0].x;
    const y0 = gradientHandlePositions[0].y;

    // Coordinates of the radius of a circle
    const x1 = gradientHandlePositions[1].x;
    const y1 = gradientHandlePositions[1].y;
    // Coordinates of a point stretching a circle
    const x2 = gradientHandlePositions[2].x;
    const y2 = gradientHandlePositions[2].y;

    const radiusX = (Math.sqrt((x2 - x0) ** 2 + (y2 - y0) ** 2) * 100).toFixed(2);
    const radiusY = (Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2) * 100).toFixed(2);

    return { radiusX, radiusY };
};

const getGradientRadial = (rect) => {
    const { gradientHandlePositions, gradientStops } = rect.fills[0];

    const { centerX, centerY } = getGradientCenterCoordinates(gradientHandlePositions);
    const { radiusX, radiusY } = getGradientRadius(gradientHandlePositions);
    const colorString = getMappedColors(gradientStops);

    return `radial-gradient(${radiusX}% ${radiusY}% at ${centerX}% ${centerY}%, ${colorString})`;
};

const getGradientAnugular = (rect) => {
    const { gradientHandlePositions, gradientStops } = rect.fills[0];

    const angleDeg = getAngelDeg(gradientHandlePositions, 30);

    const { centerX, centerY } = getGradientCenterCoordinates(gradientHandlePositions);
    const colorString = getMappedColors(gradientStops);

    return `conic-gradient(from ${angleDeg}deg at ${centerX}% ${centerY}%, ${colorString})`;
};
const colorToToken = (color) => {
    const rect = color.children.find(({ type }) => type === 'RECTANGLE');
    const type = rect.fills[0].type;

    if (type === 'SOLID')
        return getSolidColor({
            opacity: rect.fills[0].a,
            r: rect.fills[0].color.r,
            g: rect.fills[0].color.g,
            b: rect.fills[0].color.b,
        });

    if (type === 'GRADIENT_LINEAR') return getGradientLinerColor(rect);
    if (type === 'GRADIENT_RADIAL') return getGradientRadial(rect);
    if (type === 'GRADIENT_ANGULAR') return getGradientAnugular(rect);

    return '';
};

module.exports = colorToToken;
