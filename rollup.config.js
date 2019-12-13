import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const plugins = [
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
];
const external = Object.keys(pkg.peerDependencies);

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
        input: 'src/index.js',
        output: {
            file: 'umd/index.js',
            format: 'umd',
            name: 'gds',
            globals: {
                '@emotion/core': 'emotionCore',
                '@emotion/styled': 'emotionStyled',
                'emotion-theming': 'emotionTheming',
                react: 'React',
                'react-dom': 'ReactDOM',
                'styled-system': 'styledSystem',
            },
            esModule: false,
        },
        plugins: [...plugins, terser()],
        external,
    },
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
        plugins,
        external,
    },
];
