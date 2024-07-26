import fs from 'fs';
import path from 'path';

export const getEntries = (prefix, isIndexFile) =>
    fs.readdirSync(path.resolve(__dirname, prefix)).reduce((acc, name) => {
        const entryName = path.parse(name).name;
        const entryPath = isIndexFile ? `${prefix}/${name}/index.tsx` : `${prefix}/${name}`;
        return { ...acc, [entryName]: entryPath };
    }, {});
