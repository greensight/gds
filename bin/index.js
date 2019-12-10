#!/usr/bin/env node

require('dotenv').config();

const getTokens = require('./getTokens');

let tokens;
if (process.argv.includes('-t')) tokens = process.argv[process.argv.indexOf('-t') + 1].split(',');
getTokens(tokens);
