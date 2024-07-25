import multiInput from 'rollup-plugin-multi-input';
import copy from 'rollup-plugin-copy';
import createPackageJson from './utils/createPackage';
const folders = ['dist/emotion', 'dist/autokits', 'dist/scss'];

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
                ...folders.map((folder) => ({
                    src: 'package.json',
                    dest: [folder],
                    transform: () =>
                        createPackageJson('./esm/index.js', `../types/${folder.replace('dist/', '')}.d.ts`),
                })),
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
