const fs = require('fs');
const { resolve } = require('path');
const { red, green } = require('chalk');
const figma = require('./figma');
const getPalettes = require('./getPalettes');
const getColors = require('./getColors');
const getTypography = require('./getTypography');
const getIcons = require('./getIcons');

const getters = {
    palettes: getPalettes,
    colors: getColors,
    typography: getTypography,
    icons: getIcons,
};

async function getToken(type, page, config) {
    let token;
    const name = `${type[0].toUpperCase()}${type.slice(1)}`;
    const frame = page.children.find(({ name }) => name === config.frames[type]);
    if (frame) {
        try {
            token = await getters[type](frame, config);
            if (token) console.log(`✅  ${name}`);
        } catch (err) {
            console.log(`❌  ${name}`);
            console.error(red(err.message));
        }
    } else {
        console.error(red(`Cannot find frame "${config.frames[type]}"`));
    }

    return { [type]: token };
}

async function getTokens(config) {
    const axios = figma(config.figmaToken);
    let response;
    try {
        response = await axios(`files/${config.figmaId}`);
    } catch (err) {
        if (err.response.status === 403) {
            console.error(red(`${err.message}. Check your "figmaToken"`));
        }

        if (err.response.status === 404) {
            console.error(red(`${err.message}. Check your "figmaId"`));
        }

        process.exit(1);
    }

    const page = response.data.document.children.find(({ name }) => name === config.page);
    if (!page) {
        console.log(red(`Cannot find page "${config.page}"`));
        process.exit(1);
    }

    const tokenGetters = config.tokens.map(token => getToken(token, page, config));
    const tokensArr = await Promise.all(tokenGetters);
    const tokensObj = tokensArr.reduce((acc, item) => ({ ...acc, ...item }), {});

    const fullTokensDir = resolve(config.tokensDir);
    await fs.promises.mkdir(fullTokensDir, { recursive: true });

    try {
        await fs.promises.writeFile(`${fullTokensDir}/tokens.json`, JSON.stringify(tokensObj));
        console.log(green(`Tokens are ready to use: ${config.tokensDir}/tokens.json`));
    } catch (err) {
        console.error(red(err.message));
        console.log(red(`Cannot write file: ${fullTokensDir}/tokens.json`));
        process.exit(1);
    }
}

module.exports = getTokens;
