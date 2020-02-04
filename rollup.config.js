import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const getEntries = prefix =>
    fs.readdirSync(path.resolve(__dirname, prefix)).reduce(
        (acc, name) => ({
            ...acc,
            [name]: `${prefix}${name}/index.tsx`,
        }),
        {},
    );

export default [
    {
        input: {
            index: 'src/index.js',
            ...getEntries('src/components/'),
            autokits: 'src/components/autokits/index.js',
            createTheme: 'src/utils/createTheme.js',
            useTheme: 'src/utils/useTheme.js',
            typography: 'src/utils/typography.js',
            scale: 'src/utils/scale.js',
        },
        output: [
            {
                dir: 'esm',
                format: 'esm',
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
            commonjs({ exclude: 'src/**' }),
            babel({
                exclude: 'node_modules/**',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            }),
            svgr({
                svgo: false,
                titleProp: true,
            }),
            json(),
        ],
        external: Object.keys(pkg.peerDependencies),
    },
];
