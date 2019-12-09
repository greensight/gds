import axios from 'axios';

export default axios.create({
    baseURL: `https://api.figma.com/v1/files/${process.env.FIGMA_ID}`,
    headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN,
    },
});
