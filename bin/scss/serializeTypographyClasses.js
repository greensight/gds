const writeFile = require('./writeFile');

async function serializeTypographyClasses(config, tokens) {
    const { typography } = tokens;

    const getClassName = (typographyName) => `${typographyName}Typography`;

    const getStyle = (typographyName) => {
        const name = getClassName(typographyName);
        return `.${name} {
            @include ${name}
        }`;
    };

    const fileData = Object.keys(typography.styles).map(getStyle).join('\n\n');

    writeFile({ name: 'typography', fileData, config });
}

module.exports = serializeTypographyClasses;
