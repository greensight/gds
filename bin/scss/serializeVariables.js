const writeFile = require('./writeFile');

const getVars = (vars, prefix) =>
    Object.keys(vars).reduce((acc, key) => {
        const name = prefix ? `${prefix}-${key}` : key;
        const value = vars[key];

        return `${acc}$${name}: ${value};\n`;
    }, '');

const DEFAULT_VARIABLES = {
    gs: 8,
    gsMinor: 4,
};
function serializeVariables(config, tokens) {
    const {
        colors,
        shadows,
        layout: { breakpoints },
    } = tokens;

    const defaultVariables = Object.entries(DEFAULT_VARIABLES)
        .map(([key, value]) => `$${key}: ${value}px;`)
        .join('\n');
    const colorVars = getVars(colors, 'cl');
    const shadowsVars = getVars(shadows, 'shadow');
    const breakpointVars = getVars(breakpoints);

    const fileData = [defaultVariables, colorVars, shadowsVars, breakpointVars].join('\n');

    writeFile({ name: 'variables', fileData, config });
}

module.exports = serializeVariables;
