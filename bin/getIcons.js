const fs = require('fs');
const axios = require('axios');
const figmaAxios = require('./figmaAxios');

async function getImageLinks(iconsData) {
    // const slicedData = iconsData.slice(0, 3);
    const iconIds = iconsData.map(({ id }) => id).join(',');
    const response = await figmaAxios(`images/${process.env.FIGMA_ID}?ids=${iconIds}&format=svg`);
    const { images } = response.data;
    return iconsData.map(({ id, name }) => ({ id, name, url: images[id] }));
}

async function loadImage(iconData) {
    // TODO replace with path variable from config
    const iconPath = `./src/images/icons/${iconData.name}.svg`;
    const writeStream = fs.createWriteStream(iconPath);

    const response = await axios(iconData.url, { responseType: 'stream' });
    response.data.pipe(writeStream);

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve({
                name: `${iconData.name}.svg`,
                size: fs.statSync(iconPath).size,
            });
        });
        writeStream.on('error', err => {
            console.log('error writting file', err);
            reject(err);
        });
    });
}

async function getIcons() {
    // TODO Добавить обработку ошибок
    // TODO Добавить создание директории, если её нет
    const response = await figmaAxios(`files/${process.env.FIGMA_ID}`);
    const page = response.data.document.children.find(({ name }) => name === 'Storybook');
    const palettesFrame = page.children.find(({ name }) => name === 'Icons');
    let iconsData = palettesFrame.children.map(({ id, name }) => ({ id, name }));
    iconsData = await getImageLinks(iconsData);
    const icons = iconsData.map(icon => loadImage(icon));
    const res = await Promise.all(icons);
    console.log(res);
    console.log(`✅  Icons`);
}

module.exports = getIcons;
