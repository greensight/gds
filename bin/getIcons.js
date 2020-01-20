const fs = require('fs');
const { resolve } = require('path');
const { Transform } = require('stream');
const axios = require('axios');
const { red, green } = require('chalk');
const figma = require('./figma');

class RemoveFillStream extends Transform {
    _transform(data, encoding, callback) {
        this.push(data.toString().replace(/ fill=".*?"/g, ''));
        callback();
    }
}

async function getImageLinks(iconsData, figmaToken, figmaId) {
    const iconIds = iconsData.map(({ id }) => id).join(',');
    const axios = figma(figmaToken);
    const response = await axios(`images/${figmaId}?ids=${iconIds}&format=svg`);
    const { images } = response.data;
    return iconsData.map(({ id, name }) => ({ id, name, url: images[id] }));
}

async function loadImage(icon, iconsDir) {
    const pathArr = icon.name.split('/').map(part => part.trim());
    const directoryPath = pathArr.slice(0, pathArr.length - 1).join('/');
    const name = pathArr[pathArr.length - 1];
    let path;
    if (directoryPath) {
        await fs.promises.mkdir(resolve(`${iconsDir}/${directoryPath}`), { recursive: true });
        path = `${iconsDir}/${directoryPath}/${name}.svg`;
    } else {
        path = `${iconsDir}/${name}.svg`;
    }
    const writeStream = fs.createWriteStream(resolve(path));
    const response = await axios(icon.url, { responseType: 'stream' });
    response.data.pipe(new RemoveFillStream()).pipe(writeStream);

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
    let iconsData = frame.children.filter(({ type }) => type === 'COMPONENT').map(({ id, name }) => ({ id, name }));
    iconsData = await getImageLinks(iconsData, config.figmaToken, config.figmaId);
    await fs.promises.mkdir(resolve(config.iconsDir), { recursive: true });
    const icons = iconsData.map(icon => loadImage(icon, config.iconsDir));
    await Promise.all(icons);
    console.log(green(`Icons are available in directory: ${config.iconsDir}`));
}

module.exports = getIcons;
