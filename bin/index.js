#!/usr/bin/env node

require('dotenv').config();

// const getTokens = require('./getTokens');
const getIcons = require('./getIcons');

// let tokens;
// if (process.argv.includes('-t')) tokens = process.argv[process.argv.indexOf('-t') + 1].split(',');
// getTokens(tokens);
getIcons();
