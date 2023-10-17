const axios = require('axios');

const figmaAxios = (figmaToken) =>
    axios.create({
        baseURL: 'https://api.figma.com/v1/',
        headers: {
            'X-Figma-Token': figmaToken,
        },
        timeout: 10000,
    });

module.exports = figmaAxios;
