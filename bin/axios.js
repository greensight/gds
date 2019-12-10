const axios = require('axios');

const instance = axios.create({
    baseURL: `https://api.figma.com/v1/files/${process.env.FIGMA_ID}`,
    headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN,
    },
});

module.exports = instance;
