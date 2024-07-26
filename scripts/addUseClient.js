const fs = require('fs');
const path = require('path');
const glob = require('glob');

const directoryPaths = ['./dist/scss/esm', './dist/scss/cjs'];

// A crutch function for adding a directive to a file
const addUseClient = (directories) => {
    directories.forEach((directory) => {
        glob(path.join(directory, '**/*.js'), (err, files) => {
            if (err) {
                console.error(err);
                return;
            }

            files.forEach((file) => {
                const filePath = path.resolve(file);
                fs.readFile(filePath, 'utf8', (readErr, data) => {
                    if (readErr) {
                        console.error(`Ошибка чтения файла ${filePath}: `, readErr);
                        return;
                    }

                    if (
                        !data.includes('React.createContext') &&
                        !filePath.includes(`${directory.replaceAll('.', '')}/components`)
                    )
                        return null;
                    if (!data.includes("require('react');")) return null;
                    // Replace the contents of the file by adding the 'use client' directive
                    const updatedData = data.replace(/'use strict';/gm, "'use strict';\n'use client';");

                    fs.writeFile(filePath, updatedData, 'utf8', (writeErr) => {
                        if (writeErr) {
                            console.error(`Ошибка записи файла ${filePath}: `, writeErr);
                        } else {
                            console.log(`Директива 'use client' добавлена в файл ${filePath}`);
                        }
                    });
                });
            });
        });
    });
};

addUseClient(directoryPaths);
