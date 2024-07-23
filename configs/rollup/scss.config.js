import { scssConfigOptios } from './utils/scssConfigOptions';

const configInput = ['src/scss.ts', 'src/components/scss/**/*.{ts,tsx}', '!src/components/scss/**/types.{ts,tsx}'];
const renameIndexFile = (fileName) => ({
    name: 'rename-index-file',
    generateBundle: (_, bundles) => {
        Object.keys(bundles).forEach((bundleName) => {
            if (bundleName === fileName) {
                bundles[bundleName].fileName = 'index.js';
            }
        });

        return bundles;
    },
});
const addCSSImport = () => ({
    name: 'add-css-imports',
    generateBundle: (_, bundles) => {
        Object.keys(bundles).forEach((bundleName) => {
            const code = bundles[bundleName].code.replace(new RegExp(/var styles = "";/g), `require('./index.css');`);
            bundles[bundleName].code = code;
        });
        return bundles;
    },
});

const scssESMConfig = {
    input: configInput,

    output: [
        {
            dir: 'dist/scss/esm',
            format: 'esm',
            plugins: [addCSSImport(), renameIndexFile('scss.js')],
        },
    ],
    ...scssConfigOptios({ dir: 'dist/scss/esm' }),
};

const scssCJSConfig = {
    input: configInput,

    output: [
        {
            dir: 'dist/scss/cjs',
            format: 'cjs',
            plugins: [addCSSImport(), renameIndexFile('scss.js')],
        },
    ],
    ...scssConfigOptios({ dir: 'dist/scss/cjs' }),
};

export default [scssESMConfig, scssCJSConfig];
