const writeFile = require('../writeFile');
const { mediaMq, mediaMinMq } = require('./media');
const { getTypographyMixin } = require('./typography');
const { getLayoutMixin } = require('./layout');

async function serializeMixins(config, tokens) {
    const { typography } = tokens;

    const fileData = [
        mediaMinMq(),
        mediaMq(),
        ...Object.entries(typography.styles).map(([key, value]) =>
            getTypographyMixin(key, value, typography.breakpoints),
        ),
        getLayoutMixin(tokens),
    ].join('\n');

    writeFile({ name: 'mixins', fileData, config });
}

module.exports = serializeMixins;
