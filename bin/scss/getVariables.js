const writeFile = require('./writeFile');

const getVars = (vars) => Object.keys(vars).reduce((acc, key) => `${acc}$${key}: ${vars[key]};\n`, '');

const DEFAULT_VARIABLES = {
    gs: 8,
    gsMinor: 4,
};
function getVariables(config, tokens) {
    const {
        colors,
        shadows,
        layout: { breakpoints },
    } = tokens;

    const defaultVariables = Object.entries(DEFAULT_VARIABLES)
        .map(([key, value]) => `$${key}: ${value}px;`)
        .join('\n');
    const colorVars = getVars(colors);
    const shadowsVars = getVars(shadows);
    const breakpointVars = getVars(breakpoints);

    const vars = [defaultVariables, colorVars, shadowsVars, breakpointVars];

    writeFile({ name: 'variables', fileData: vars.join('\n'), config });
}

module.exports = getVariables;
