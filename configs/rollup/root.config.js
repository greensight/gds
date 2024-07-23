import multiInput from 'rollup-plugin-multi-input';
import copy from 'rollup-plugin-copy';
import createPackageJson from './utils/createPackage';
// import { emotionConfigOptios } from './utils/emotionConfigOptios';

const rootConfig = {
    input: ['dist/**/*.js'],
    plugins: [
        multiInput.default({
            relative: 'dist',
        }),
        copy({
            targets: [
                { src: 'package.json', dest: 'dist' },
                { src: 'LICENSE.md', dest: 'dist' },
                { src: 'README.md', dest: 'dist' },
                { src: 'bin', dest: 'dist' },
                {
                    src: 'package.json',
                    dest: ['dist/emotion', 'dist/autokits'],
                    transform: () => createPackageJson('./esm/index.js'),
                },
            ],
        }),
    ],
    output: [
        {
            dir: 'dist',
            format: 'cjs',
        },
    ],
};

export default rootConfig;
