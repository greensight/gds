const fetch = require('node-fetch-commonjs');

const figmaAxios = (figmaToken) => {
    const execute = async (url) => {
        const response = await fetch(`https://api.figma.com/v1/${url}`, {
            headers: {
                'X-Figma-Token': figmaToken,
            },
        });

        return response.json();
    };

    return execute;
};

module.exports = figmaAxios;
