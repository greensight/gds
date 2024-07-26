const writeFile = require('../writeFile');
const { mediaMq, mediaMinMq } = require('./media');
const { getTypographyMixin } = require('./typography');
const { getLayoutMixin } = require('./layout');

const imports = ["@use 'sass:map';", "@use 'sass:list';"].join('\n');

async function serializeMixins(config, tokens) {
    const { typography } = tokens;

    const fileData = [
        imports,
        mediaMinMq(),
        mediaMq(),
        ...Object.entries(typography.styles).map(([key, value]) =>
            getTypographyMixin(key, value, typography.breakpoints),
        ),
        getLayoutMixin(),
    ].join('\n');

    writeFile({ name: 'mixins', fileData, config });
}

module.exports = serializeMixins;
