const writeFile = require('./writeFile');

async function serializeTypographyClasses(config, tokens) {
    const { typography } = tokens;

    const getMixinName = (typographyName) => `${typographyName}Typography`;

    const getStyle = (typographyName) => {
        return `.${typographyName} {
            @include ${getMixinName(typographyName)}
        }`;
    };

    const fileData = Object.keys(typography.styles).map(getStyle).join('\n\n');

    writeFile({ name: 'typography', fileData, config });
}

module.exports = serializeTypographyClasses;
