#!/usr/bin/env node

require('dotenv').config();

require('@babel/register')({
    presets: ['@babel/preset-env'],
});

const getTokens = require('./getTokens').default;

let tokens;
if (process.argv.includes('-t')) tokens = process.argv[process.argv.indexOf('-t') + 1].split(',');
getTokens(tokens);
