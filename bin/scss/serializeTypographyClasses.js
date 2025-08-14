const writeFile = require('./writeFile');

const VARIABLE_NAME = 'typography';

async function serializeTypographyClasses(config, tokens) {
    const { typography } = tokens;
    const layer = config.scss?.typography?.layer;
    const imports = `@use './mixins.scss' as ${VARIABLE_NAME};`;

    const getMixinName = (typographyName) => `${VARIABLE_NAME}.${typographyName}Typography`;

    const getStyle = (typographyName) => {
        return `.${typographyName} {
            @include ${getMixinName(typographyName)}
        }`;
    };

    const classes = Object.keys(typography.styles).map(getStyle).join('\n\n');
    const fileData = `${imports}\n\n${layer ? `@layer ${layer} { ${classes} }` : classes}`;

    writeFile({ name: 'typography.module', fileData, config });
}

module.exports = serializeTypographyClasses;
