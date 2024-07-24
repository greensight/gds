import { scssConfigOptios } from './utils/scssConfigOptions';
import fs from 'fs';

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

export const getFiles = (entry, extensions = [], excludeExtensions = []) => {
    let fileNames = [];
    const dirs = fs.readdirSync(entry);

    dirs.forEach((dir) => {
        const path = `${entry}/${dir}`;

        if (fs.lstatSync(path).isDirectory()) {
            fileNames = [...fileNames, ...getFiles(path, extensions, excludeExtensions)];

            return;
        }

        if (
            !excludeExtensions.some((exclude) => dir.endsWith(exclude)) &&
            extensions.some((ext) => dir.endsWith(ext))
        ) {
            fileNames.push(path);
        }
    });

    return fileNames;
};

const configInput = ['src/scss.ts', 'src/components/scss/**/*.{ts,tsx}', '!src/components/scss/**/types.{ts,tsx}'];
const scssESMConfig = {
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

// const scssCJSConfig = {
//     input: configInput,

//     output: [
//         {
//             dir: 'dist/scss/cjs',
//             format: 'cjs',
//             plugins: [
//                 // addCSSImport(),
//                 // renameIndexFile('scss.js'),
//                 // postcss({
//                 //     modules: true, // Это позволит генерировать CSS-модули
//                 //     extract: true, // Экстрагируйте CSS в отдельные файлы
//                 //     minimize: true, // Минимизируйте CSS
//                 // }),
//             ],
//             // preserveModules: true,
//             // preserveModulesRoot: 'src',
//         },
//     ],
//     ...scssConfigOptios({ dir: 'dist/scss/cjs' }),
// };

export default [scssESMConfig];
