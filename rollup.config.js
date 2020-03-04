import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
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
            autokits: 'src/autokits/index.js',
            createTheme: 'src/utils/createTheme.js',
            useTheme: 'src/utils/useTheme.js',
            baseTheme: 'src/utils/baseTheme.js',
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
            postcss(),
            alias({
                entries: [
                    { find: '@components', replacement: path.resolve(__dirname, './src/components') },
                    { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
                    { find: '@helpers', replacement: path.resolve(__dirname, './src/helpers') },
                    { find: '@icons', replacement: path.resolve(__dirname, './src/icons') },
                ],
            }),
        ],
        external: Object.keys(pkg.peerDependencies),
    },
];
