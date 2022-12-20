import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import fs from 'fs';
import path from 'path';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

const getEntries = (prefix, isFile) =>
    fs.readdirSync(path.resolve(__dirname, prefix)).reduce((acc, name) => {
        const entryName = path.parse(name).name;
        const entryPath = isFile ? `${prefix}/${name}` : `${prefix}/${name}/index.tsx`;
        return { ...acc, [entryName]: entryPath };
    }, {});

export default [
    {
        input: {
            index: 'src/index.ts',
            ...getEntries('src/components'),
            ...getEntries('src/autokits'),
            ...getEntries('src/utils', true),
        },
        output: [
            {
                dir: 'esm',
                format: 'es',
            },
            {
                dir: 'cjs',
                format: 'cjs',
            },
        ],
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
    },
];
