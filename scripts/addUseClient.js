const fs = require('fs');
const path = require('path');
const glob = require('glob');

const directoryPaths = ['./dist/scss/esm', './dist/scss/cjs'];

// Костыль-функция для добавления директивы в файл
const addUseClient = (directories) => {
    // Находим все JS файлы в директории
    directories.forEach((directory) => {
        glob(path.join(directory, '**/*.js'), (err, files) => {
            if (err) {
                console.error(err);
                return;
            }

            files.forEach((file) => {
                const filePath = path.resolve(file); // Получаем полный путь к файлу
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
                    // Заменяем содержимое файла, добавляя директиву 'use client'
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

// Вызываем функцию
addUseClient(directoryPaths);
