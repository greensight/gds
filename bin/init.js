#!/usr/bin/env node

const { resolve } = require('path');
const fs = require('fs');
const { red, green } = require('chalk');

const config = {
    figmaToken: '',
    figmaId: '',
    iconsDir: 'src/images/icons/tokens',
    page: 'Tokens',
    tokensDir: 'public',
    scss: {
        dir: './src/scss/tokens',
        components: {
            gridLayout: {
                layer: '',
            },
            flexLayout: {
                layer: '',
            },
            container: {
                layer: '',
            },
        },
    },
};

async function init() {
    const rootDir = resolve('.');

    try {
        await fs.promises.writeFile(`${rootDir}/gds.config.json`, JSON.stringify(config));

        console.log(green(`gds.config.json successfully created`));
    } catch (err) {
        console.error(red(err.message));
        process.exit(1);
    }
}

init();
