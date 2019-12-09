require('dotenv').config();

require('@babel/register')({
    presets: ['@babel/preset-env'],
});

const getTokens = require('./getTokens').default;

getTokens();
