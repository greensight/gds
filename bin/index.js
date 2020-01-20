#!/usr/bin/env node

// TODO Как писать код вне bin, оставив здесь единственный скрипт вызова?

const { resolve } = require('path');
const fs = require('fs');
const { red, bold } = require('chalk');
const defaults = require('./defaults');
const getTokens = require('./getTokens');

let configPath = resolve('gds.config.json');
if (process.argv.includes('-c')) configPath = resolve(process.argv[process.argv.indexOf('-c') + 1]);

if (!fs.existsSync(configPath)) {
    console.log(red('Add "gds.config.json" config file in root directory or set another location with "-c" flag'));
    process.exit(1);
}

const configContent = fs.readFileSync(resolve(configPath));
let config;

try {
    config = JSON.parse(configContent);
} catch (error) {
    console.log(red('Config file must contain an object literal'));
    process.exit(1);
}

if (!config.figmaToken) {
    console.log(
        red(
            'Add "figmaToken" property to your config. See details: https://www.figma.com/developers/api#authentication',
        ),
    );
    process.exit(1);
}

if (!config.figmaId) {
    console.log(
        red(
            `Add "figmaId" property to your config. Get it from Figma file link: https://www.figma.com/file/${bold(
                'FIGMA_ID',
            )}/project-name`,
        ),
    );
    process.exit(1);
}

config = { ...defaults, ...config };

if (Array.isArray(config.tokens) && config.tokens.length) {
    getTokens(config);
} else {
    console.log(red('Pass array of tokens in "tokens" field of config file'));
    process.exit(1);
}
