import fs from 'fs';
import { resolve } from 'path';
import axios from '../src/scripts/axios';
import getPalettes from '../src/scripts/getPalettes';
import getColors from '../src/scripts/getColors';

async function getTokens() {
    const response = await axios();
    const figmaTree = response.data;
    const palettes = await getPalettes(figmaTree);
    const colors = await getColors(figmaTree);

    fs.writeFile(resolve(__dirname, '../public/tokens.json'), JSON.stringify({ palettes, colors }), err => {
        if (err) throw err;
        console.log('Tokens are ready to use!');
    });
}

export default getTokens;
