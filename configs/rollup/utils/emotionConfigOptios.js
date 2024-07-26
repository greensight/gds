import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import path from 'path';
import postcss from 'rollup-plugin-postcss';

import pkg from '../../../package.json';

export const emotionConfigOptios = {
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        }),
        commonjs({
            exclude: 'src/**',
        }),
        babel({
            exclude: 'node_modules/**',
            extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
            // set path relative to rollup.config.js
            configFile: path.resolve(__dirname, './configs/babel/emotion.config.json'),
        }),
        svgr({
            svgo: false,
            titleProp: true,
        }),
        json(),
        postcss(),
    ],
    external: Object.keys(pkg.peerDependencies),
    context: 'null',
};
