const writeFile = require('./writeFile');

async function serializeFunctions(config) {
    const imports = ["@use 'sass:math';", "@use './variables';"].join('\n');
    const gs = () => {
        const mixinHead = '@function gs($value, $minorBool: false) {';
        const mixinVars = '$maxMinorValue: 40;';
        const mixinBody =
            '@if ($minorBool) { $value: calc($value * variables.$gutterStepMinor); @if ($value > $maxMinorValue) { @return #{math.floor(calc($value / variables.$gutterStep)) * variables.$gutterStep};} @else { @return #{$value}}} \n@else { @return #{calc($value * variables.$gutterStep)} }';
        const mixinFooter = '}';
        return [mixinHead, mixinVars, mixinBody, mixinFooter].join('\n');
    };
    const fileData = [imports, gs()].join('\n\n');

    writeFile({ name: 'functions', fileData, config });
}

module.exports = serializeFunctions;
