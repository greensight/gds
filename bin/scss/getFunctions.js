const writeFile = require('./writeFile');

async function getFunctions(config) {
    const imports = "@import './variables.module.scss';\n";
    const scale = () => {
        const mixinHead = '@function scale($value, $minorBool: false) {';
        const mixinVars = '$maxMinorValue: 40;';
        const mixinBody =
            '@if ($minorBool) { $value: calc($value * $gs-minor); @if ($value > $maxMinorValue) { @return #{floor(calc($value / $gs)) * $gs}px;} @else { @return #{$value}px}} \n@else { @return #{calc($value * $gs)}px }';
        const mixinFooter = '}';
        return [mixinHead, mixinVars, mixinBody, mixinFooter].join('\n');
    };
    const vars = [imports, scale()];

    writeFile({ name: 'functions', fileData: vars.join('\n'), config });
}

module.exports = getFunctions;
