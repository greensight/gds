import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import path from 'path';
import sass from 'rollup-plugin-sass';
import fs, { writeFileSync } from 'fs';
import multiInput from 'rollup-plugin-multi-input';
import pkg from '../../../package.json';

export const scssConfigOptios = ({ dir }) => ({
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss', '.css'],
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
        sass({
            output(_, styleNodes) {
                styleNodes.forEach((styleObj) => {
                    const filePath = path.resolve(
                        __dirname,
                        `./${dir}/components/${styleObj.id.replace(/^.*\/src\/components\/scss\//, '').replace('styles.module.scss', 'index.css')}`,
                    );
                    const dirName = path.dirname(filePath);
                    if (!fs.existsSync(dirName)) {
                        fs.mkdirSync(dirName, { recursive: true });
                    }
                    writeFileSync(filePath, styleObj.content);
                });
            },
        }),
        multiInput.default({
            transformOutputPath: (output) => {
                return output.replace('components/scss', 'components');
            },
        }),
    ],
    external: Object.keys(pkg.peerDependencies),
    context: 'null',
});
