import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const getEntries = prefix =>
    fs
        .readdirSync(path.resolve(__dirname, prefix))
        .filter(name => !['Storybook', 'helpers'].includes(name))
        .reduce(
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
            Storybook: 'src/components/Storybook/index.js',
            ...getEntries('src/components/'),
            typography: 'src/scripts/typography.js',
            baseTheme: 'src/scripts/baseTheme.js',
            createTheme: 'src/scripts/createTheme.js',
            useTheme: 'src/scripts/useTheme.js',
            major: 'src/scripts/major.js',
            minor: 'src/scripts/minor.js',
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
        ],
        external: Object.keys(pkg.peerDependencies),
    },
];
