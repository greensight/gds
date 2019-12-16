import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

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
                extensions,
            }),
            commonjs({ exclude: 'src/**' }),
            babel({
                exclude: 'node_modules/**',
                extensions,
            }),
            postcss({
                extract: true,
                minimize: true,
            }),
            svgr(),
        ],
        external: Object.keys(pkg.peerDependencies),
    },
];
