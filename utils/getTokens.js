import fs from 'fs';
import { resolve } from 'path';
import axios from '../src/scripts/axios';
import getPalettes from '../src/scripts/getPalettes';
import getColors from '../src/scripts/getColors';

const getters = {
    palettes: getPalettes,
    colors: getColors,
};

async function getTokens(types) {
    const response = await axios();
    const figmaTree = response.data;

    const getToken = type => {
        let token = {};

        if (!types || types.includes(type)) {
            try {
                token = getters[type](figmaTree);
                console.log(`✅  ${type[0].toUpperCase()}${type.slice(1)}`);
            } catch (error) {
                console.log(`❌  ${type[0].toUpperCase()}${type.slice(1)}`);
            }
        }

        return token;
    };

    const palettes = getToken('palettes');
    const colors = getToken('colors');

    fs.writeFile(resolve(__dirname, '../public/tokens.json'), JSON.stringify({ palettes, colors }), err => {
        if (err) throw err;
        console.log('Tokens are ready to use!');
    });
}

export default getTokens;
