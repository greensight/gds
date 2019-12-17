const axios = require('axios');

const figmaAxios = axios.create({
    baseURL: 'https://api.figma.com/v1/',
    headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN,
    },
});

module.exports = figmaAxios;
