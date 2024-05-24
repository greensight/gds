const fs = require('fs');
const { red } = require('chalk');
const { resolve } = require('path');

const getVariables = require('./getVariables');
const getFunctions = require('./getFunctions');
const getMixins = require('./getMixins');

async function loadSCSS() {
    let configPath = resolve('gds.config.json');
    if (process.argv.includes('-c')) configPath = resolve(process.argv[process.argv.indexOf('-c') + 1]);

    try {
        const configContent = await fs.promises.readFile(resolve(configPath));

        let config;

        try {
            config = JSON.parse(configContent);
        } catch {
            console.error(red('Config file must contain an object literal'));
            process.exit(1);
        }

        const fullTokensDir = resolve(config.tokensDir);
        let fileTokens;
        try {
            fileTokens = await fs.promises.readFile(`${fullTokensDir}/tokens.json`);
        } catch {
            console.error(red('File tokens.json not found'));
            process.exit(1);
        }
        const tokens = JSON.parse(fileTokens);

        if (!config.scssDir) {
            console.error(red('Add "scssDir" property to your config.'));
            process.exit(1);
        }

        await Promise.all([getVariables(config, tokens), getMixins(config, tokens), getFunctions(config)]);
    } catch {
        console.error(
            red('Add "gds.config.json" config file in root directory or set another location with "-c" flag'),
        );
    }
}

loadSCSS();
