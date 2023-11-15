const fs = require('fs');
const { resolve } = require('path');
const { red, green } = require('chalk');
const figma = require('./figma');
const getPalettes = require('./getPalettes');
const getColors = require('./getColors');
const getTypography = require('./getTypography');
const getIcons = require('./getIcons');
const getLayout = require('./getLayout');
const getShadows = require('./getShadows');

const getters = {
    palettes: getPalettes,
    colors: getColors,
    typography: getTypography,
    icons: getIcons,
    layout: getLayout,
    shadows: getShadows,
};

async function getToken(type, page, config) {
    let token;
    const frameName = `${type[0].toUpperCase()}${type.slice(1)}`;
    const frame = page.children.find(({ name }) => name === frameName);
    if (!frame) return;

    try {
        token = await getters[type](frame, config);
        console.log(`✅  ${frameName}`);
    } catch (err) {
        console.log(`⛔️  ${frameName}`);
        console.error(red(err.message));
    }

    return { [type]: token };
}

async function getTokens(config) {
    const axios = figma(config.figmaToken);
    let response;
    let interval;
    try {
        console.log('requesting... This might take a minute...');
        response = await axios(`files/${config.figmaId}`);
        clearInterval(interval);
    } catch (err) {
        if (err.response.status === 403) {
            console.error(red(`${err.message}. Check your "figmaToken"`));
        }

        if (err.response.status === 404) {
            console.error(red(`${err.message}. Check your "figmaId"`));
        }

        process.exit(1);
    }

    const page = response.document.children.find(({ name }) => name === config.page);
    if (!page) {
        const childrenNames = response.document.children.map((e) => e.name);
        console.log(red(`Cannot find page "${config.page}". Existing pages:`));
        console.log(red(childrenNames.join('\n')));
        process.exit(1);
    }

    const tokenGetters = config.tokens.map((token) => getToken(token, page, config));
    const tokensArr = await Promise.all(tokenGetters);
    const tokensObj = tokensArr.reduce((acc, item) => ({ ...acc, ...item }), {});

    const fullTokensDir = resolve(config.tokensDir);
    await fs.promises.mkdir(fullTokensDir, { recursive: true });

    let newFileData;
    try {
        const oldFile = await fs.promises.readFile(`${fullTokensDir}/tokens.json`);
        const oldFileData = JSON.parse(oldFile);
        newFileData = Object.entries(tokensObj).reduce(
            (acc, [name, value]) => ({
                ...acc,
                [name]: value,
            }),
            oldFileData,
        );
    } catch (error) {
        newFileData = tokensObj;
    }

    try {
        await fs.promises.writeFile(`${fullTokensDir}/tokens.json`, JSON.stringify(newFileData));
        console.log(green(`Tokens are ready to use: ${config.tokensDir}/tokens.json`));
        console.log(green(`Icons are available in directory: ${config.iconsDir}`));
    } catch (err) {
        console.error(red(err.message));
        console.log(red(`Cannot write file: ${fullTokensDir}/tokens.json`));
        process.exit(1);
    }
}

module.exports = getTokens;
