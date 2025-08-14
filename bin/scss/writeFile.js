const fs = require('fs');
const { resolve } = require('path');
const { red, green } = require('chalk');
const prettier = require('prettier');

const outsidePrettierConfig = require(resolve('.prettierrc.js'));

const { execSync } = require('child_process');

const DEFAULT_PRETTIER_CONFIG = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    endOfLine: 'lf',
    parser: 'scss',
};

async function writeFile({ name, fileData, config, extension = 'scss' }) {
    const prettierConfig = outsidePrettierConfig
        ? { ...outsidePrettierConfig, parser: 'scss' }
        : DEFAULT_PRETTIER_CONFIG;

    const fullScssDir = resolve(config.scss?.dir);
    await fs.promises.mkdir(fullScssDir, { recursive: true });
    const file = await prettier.format(fileData, prettierConfig);
    try {
        await fs.promises.writeFile(`${fullScssDir}/${name}.${extension}`, file);
        try {
            execSync(`npx stylelint "${fullScssDir}/*.${extension}" --fix`);
        } catch (error) {
            console.error('An error occurred during Stylelint execution:', error.message);
        }

        console.log(green(`${name} are ready to use: ${config.tokensDir}/${name}.${extension}`));
    } catch (err) {
        console.error(red(err.message));
        console.log(red(`Cannot write file: ${fullScssDir}/${name}.${extension}`));
        process.exit(1);
    }
}

module.exports = writeFile;
