const writeFile = require('./writeFile');

const getBreakpoints = (layoutFromTokens) => {
    const [firstBreakpoint, ...breakpoints] = Object.entries(layoutFromTokens.breakpoints);
    const list = breakpoints.map(([key, value]) => `${key}: ${value},`).join('\n');
    const scssList = `$breakpointList: (\n${list}\n);`;
    const defaultDefaultBreakpoints = `$defaultBreakpoint: '${firstBreakpoint[0]}';`;

    return [scssList, defaultDefaultBreakpoints].join('\n');
};

const serializeBreakpoints = (config, tokens) => {
    const fileData = getBreakpoints(tokens.layout);
    writeFile({ name: 'breakpoints', fileData, config });
};

module.exports = serializeBreakpoints;
