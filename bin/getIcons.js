const fs = require('fs');
const { resolve } = require('path');
const axios = require('axios');
const { red, green } = require('chalk');
const figma = require('./figma');

async function getImageLinks(iconsData, figmaToken, figmaId) {
    const iconIds = iconsData.map(({ id }) => id).join(',');
    const axios = figma(figmaToken);
    const response = await axios(`images/${figmaId}?ids=${iconIds}&format=svg`);
    const { images } = response.data;
    return iconsData.map(({ id, name }) => ({ id, name, url: images[id] }));
}

async function loadImage(icon, iconsDir) {
    const iconPath = resolve(`${iconsDir}/${icon.name}.svg`);
    const writeStream = fs.createWriteStream(iconPath);
    const response = await axios(icon.url, { responseType: 'stream' });
    response.data.pipe(writeStream);

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve();
        });
        writeStream.on('error', err => {
            console.log(red(`Cannot write file ${icon.name}.svg`), err);
            reject(err);
        });
    });
}

async function getIcons(frame, config) {
    let iconsData = frame.children.map(({ id, name }) => ({ id, name }));
    iconsData = await getImageLinks(iconsData, config.figmaToken, config.figmaId);
    await fs.promises.mkdir(config.iconsDir, { recursive: true });
    const icons = iconsData.map(icon => loadImage(icon, config.iconsDir));
    await Promise.all(icons);
    console.log(green(`Icons are available in directory: ${config.iconsDir}`));
}

module.exports = getIcons;
