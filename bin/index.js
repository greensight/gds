#!/usr/bin/env node

const { resolve } = require('path');
const fs = require('fs');
const { red, bold } = require('chalk');
const defaults = require('./defaults');
const getTokens = require('./getTokens');

async function loadTokens() {
    let configPath = resolve('gds.config.json');
    if (process.argv.includes('-c')) configPath = resolve(process.argv[process.argv.indexOf('-c') + 1]);

    try {
        const configContent = await fs.promises.readFile(resolve(configPath));

        let config;

        try {
            config = JSON.parse(configContent);
        } catch (error) {
            console.error(red('Config file must contain an object literal'));
            process.exit(1);
        }

        let tokens = [];
        const tokensFullList = ['palettes', 'colors', 'typography', 'icons', 'layout', 'shadows'];
        tokensFullList.forEach((token) => {
            if (process.argv.includes(`--${token}`)) tokens.push(token);
        });
        if (!tokens.length) tokens = config.tokens;
        if (!tokens) tokens = tokensFullList;

        if (!config.figmaToken) {
            console.error(
                red(
                    'Add "figmaToken" property to your config. See details: https://www.figma.com/developers/api#authentication',
                ),
            );
            process.exit(1);
        }

        if (!config.figmaId) {
            console.error(
                red(
                    `Add "figmaId" property to your config. Get it from Figma file link: https://www.figma.com/file/${bold(
                        'FIGMA_ID',
                    )}/project-name`,
                ),
            );
            process.exit(1);
        }

        config = { ...defaults, ...config, tokens };

        console.log('Getting tokens:', tokens);

        getTokens(config);
    } catch {
        console.error(
            red('Add "gds.config.json" config file in root directory or set another location with "-c" flag'),
        );
    }
}

loadTokens();
