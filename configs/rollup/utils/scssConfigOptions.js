import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import multiInput from 'rollup-plugin-multi-input';
import globby from 'globby';
import pkg from '../../../package.json';

const getComponentDir = (fullPath) => fullPath.split('/components/scss/')[1].replace('styles.module.scss', 'index.css');
const bundleCss = () => {
    const files = globby.sync(path.resolve(__dirname, './src/components/**/*.scss'));
    return files.map((file) =>
        postcss({
            include: file,
            extract: `components/${getComponentDir(file)}`,
            minimize: true,
        }),
    );
};
export const scssConfigOptios = () => ({
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
            // path прописываем относительно rollup.config.js
            configFile: path.resolve(__dirname, './configs/babel/scss.config.json'),
        }),
        svgr({
            svgo: false,
            titleProp: true,
        }),
        json(),
        // Добавляем вручную .css т.к postcss умеет генерировать только итоговый файл
        ...bundleCss(),
        multiInput.default({
            transformOutputPath: (output) => {
                return output.replace('components/scss', 'components');
            },
        }),
    ],
    external: Object.keys(pkg.peerDependencies),
    context: 'null',
});
