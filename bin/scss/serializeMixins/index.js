const writeFile = require('../writeFile');
const { mediaMq, mediaMinMq } = require('./media');
const { getTypographyMixin } = require('./typography');
const { getLayoutMixin } = require('./layout');

const imports = [
    "@use 'sass:map';",
    "@use 'sass:list';",
    "@use 'sass:math';",
    "@use 'sass:meta';",
    "@use 'breakpoints';",
].join('\n');

async function serializeMixins(config, tokens) {
    const { typography } = tokens;

    const fileData = [
        imports,
        mediaMinMq(),
        mediaMq(),
        ...Object.entries(typography.styles).map(([key, value]) =>
            getTypographyMixin({ name: key, typographyStyles: value, breakpoints: typography.breakpoints, config }),
        ),
        getLayoutMixin(),
    ].join('\n');

    writeFile({ name: 'mixins', fileData, config });
}

module.exports = serializeMixins;
