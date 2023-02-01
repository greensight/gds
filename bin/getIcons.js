const fs = require('fs');
const { resolve } = require('path');
const { Transform } = require('stream');
const axios = require('axios');
const { red } = require('chalk');
const figma = require('./figma');

const ignorantRegex = new RegExp(` fill="(${['none', 'transparent', ''].join('|')})"`, 'g');
const getColorInformation = (dirtySvg) => {
    let isBiColor = false;
    let isMultiColor = false;

    const svg = dirtySvg.replace(ignorantRegex, '');

    const matches = [...svg.matchAll(/ fill="(.*?)"/g)];
    const uniqueColors = new Set(matches.map((e) => e[1].toLowerCase()));

    const isBlackAndWhite =
        uniqueColors.size === 2 &&
        ((uniqueColors.has('black') && uniqueColors.has('white')) ||
            (uniqueColors.has('black') && uniqueColors.has('#fff')) ||
            (uniqueColors.has('black') && uniqueColors.has('#ffffff')) ||
            (uniqueColors.has('#000') && uniqueColors.has('white')) ||
            (uniqueColors.has('#000') && uniqueColors.has('#fff')) ||
            (uniqueColors.has('#000') && uniqueColors.has('#ffffff')) ||
            (uniqueColors.has('#000000') && uniqueColors.has('white')) ||
            (uniqueColors.has('#000000') && uniqueColors.has('#fff')) ||
            (uniqueColors.has('#000000') && uniqueColors.has('#ffffff')));

    if (isBlackAndWhite) {
        isBiColor = true;
    } else if (uniqueColors.size >= 2) {
        isMultiColor = true;
    }

    return {
        isBiColor,
        isMultiColor,
        uniqueColors,
        matches,
        svg,
    };
};

class RemoveFillStream extends Transform {
    constructor(iconUrl) {
        super();

        this.iconUrl = iconUrl;
    }

    _transform(data, encoding, callback) {
        const { svg, isMultiColor } = getColorInformation(data.toString());

        if (isMultiColor) {
            this.push(svg);

            callback();
            return;
        }

        this.push(svg.replace(/ fill=".*?"/g, ''));
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
    const pathArr = icon.name.split('/').map((part) => part.trim());
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
    response.data.pipe(new RemoveFillStream(icon.name)).pipe(writeStream);

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve();
        });
        writeStream.on('error', (err) => {
            console.log(red(`Cannot write file ${icon.name}.svg`), err);
            reject(err);
        });
    });
}

async function getIcons(frame, config) {
    let iconsData = frame.children.filter(({ type }) => type === 'COMPONENT').map(({ id, name }) => ({ id, name }));
    iconsData = await getImageLinks(iconsData, config.figmaToken, config.figmaId);
    await fs.promises.mkdir(resolve(config.iconsDir), { recursive: true });
    const icons = iconsData.map((icon) => loadImage(icon, config.iconsDir));
    await Promise.all(icons);
}

module.exports = getIcons;
