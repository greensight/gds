import { scssConfigOptios } from './utils/scssConfigOptions';

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
            const { code } = bundles[bundleName];
            // Исключаем .css файлы
            if (!code) {
                return;
            }
            const emptyStylesRegex = new RegExp(/var styles = {}/g);
            if (!emptyStylesRegex.test(code)) {
                const parsedCode = code.replace(/var styles/g, `require('./index.css');\nvar styles`);
                bundles[bundleName].code = parsedCode;
            }
        });
        return bundles;
    },
});

const configInput = ['src/scss.ts', 'src/components/scss/**/*.{ts,tsx}', '!src/components/scss/**/types.{ts,tsx}'];
const scssConfig = {
    input: configInput,
    output: [
        {
            dir: 'dist/scss/esm',
            format: 'esm',
            plugins: [addCSSImport(), renameIndexFile('scss.js')],
        },
        {
            dir: 'dist/scss/cjs',
            format: 'cjs',
            plugins: [addCSSImport(), renameIndexFile('scss.js')],
        },
    ],
    ...scssConfigOptios(),
};

export default scssConfig;
