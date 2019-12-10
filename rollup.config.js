import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const plugins = [
    resolve({
        extensions,
        preferBuiltins: true,
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
];
const external = [...Object.keys(pkg.peerDependencies), 'path', 'fs'];

const getEntries = prefix =>
    fs
        .readdirSync(path.resolve(__dirname, prefix))
        .filter(name => name !== 'Storybook')
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
                axios: 'axios',
                'emotion-theming': 'emotionTheming',
                react: 'React',
                'react-dom': 'ReactDOM',
                'styled-system': 'styledSystem',
                fs: 'fs',
                path: 'path',
            },
            esModule: false,
        },
        plugins: [...plugins, terser()],
        external,
    },
    {
        input: {
            index: 'src/index.js',
            getTokens: 'src/scripts/getTokens.js',
            Storybook: 'src/components/Storybook/index.js',
            ...getEntries('src/components/'),
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
