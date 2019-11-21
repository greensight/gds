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
    }),
    commonjs(),
    babel({
        exclude: 'node_modules/**',
        extensions,
    }),
    postcss({
        extract: true,
        minimize: true,
    }),
];
const external = Object.keys(pkg.peerDependencies);

const getEntries = (prefix, isFile = false) =>
    fs.readdirSync(path.resolve(__dirname, prefix)).reduce(
        (acc, name) => ({
            ...acc,
            [isFile ? name.match(/(.*)\./)[1] : name]: `${prefix}${name}${isFile ? '' : '/index.tsx'}`,
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
                react: 'React',
                'react-dom': 'ReactDOM',
            },
            esModule: false,
        },
        plugins: [...plugins, terser()],
        external,
    },
    {
        input: {
            index: 'src/index.js',
            ...getEntries('src/components/'),
            ...getEntries('src/scripts/', true),
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
