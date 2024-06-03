const writeFile = require('./writeFile');

async function serializeFunctions(config) {
    const imports = "@import './variables.scss';\n";
    const gs = () => {
        const mixinHead = '@function gs($value, $minorBool: false) {';
        const mixinVars = '$maxMinorValue: 40;';
        const mixinBody =
            '@if ($minorBool) { $value: calc($value * $gutterStepMinor); @if ($value > $maxMinorValue) { @return #{floor(calc($value / $gutterStep)) * $gutterStep};} @else { @return #{$value}}} \n@else { @return #{calc($value * $gutterStep)} }';
        const mixinFooter = '}';
        return [mixinHead, mixinVars, mixinBody, mixinFooter].join('\n');
    };
    const fileData = [imports, gs()].join('\n');

    writeFile({ name: 'functions', fileData, config });
}

module.exports = serializeFunctions;
