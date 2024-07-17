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

const getEntries = (prefix, isIndexFile) =>
    fs.readdirSync(path.resolve(__dirname, prefix)).reduce((acc, name) => {
        const entryName = path.parse(name).name;
        const entryPath = isIndexFile ? `${prefix}/${name}/index.tsx` : `${prefix}/${name}`;
        return { ...acc, [entryName]: entryPath };
    }, {});

const configOptions = {
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
};

const emotionConfig = {
    input: {
        index: 'src/emotion.ts',
        ...getEntries('src/components/emotion', true),
        ...getEntries('src/autokits/emotion', true),
        ...getEntries('src/utils/emotion'),
    },
    output: [
        {
            dir: 'esm/emotion',
            format: 'es',
        },
        {
            dir: 'cjs/emotion',
            format: 'cjs',
        },
    ],
    ...configOptions,
};

const commonConfig = {
    input: {
        index: 'src/index.ts',
        ...getEntries('src/autokits/common', true),
        ...getEntries('src/utils/common'),
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
    ...configOptions,
};

export default [commonConfig, emotionConfig];
