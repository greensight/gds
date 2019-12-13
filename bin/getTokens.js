const fs = require('fs');
const path = require('path');
const axios = require('./axios');
const getPalettes = require('./getPalettes');
const getColors = require('./getColors');
const getTypography = require('./getTypography');

let outputDir = '../public';
if (process.argv.includes('-o')) outputDir = process.argv[process.argv.indexOf('-o') + 1];

const getters = {
    palettes: getPalettes,
    colors: getColors,
    typography: getTypography,
};

async function getTokens(types) {
    const response = await axios();
    const page = response.data.document.children.find(page => page.name === 'Storybook');

    const getToken = type => {
        let token = {};

        if (!types || types.includes(type)) {
            try {
                token = getters[type](page);
                console.log(`✅  ${type[0].toUpperCase()}${type.slice(1)}`);
            } catch (error) {
                console.log(`❌  ${type[0].toUpperCase()}${type.slice(1)}`);
                console.log(error);
            }
        }

        return token;
    };

    const palettes = getToken('palettes');
    const colors = getToken('colors');
    const typography = getToken('typography');

    fs.writeFile(
        path.resolve(__dirname, `${outputDir}/tokens.json`),
        JSON.stringify({ palettes, colors, typography }),
        err => {
            if (err) throw err;
            console.log('Tokens are ready to use!');
        },
    );
}

module.exports = getTokens;
