import { getEntries } from './utils/entires';
import { emotionConfigOptios } from './utils/emotionConfigOptios';

const autokitsConfig = {
    input: {
        index: 'src/autokits.ts',
        ...getEntries('src/autokits/common', true),
        ...getEntries('src/autokits/emotion', true),
    },
    output: [
        {
            dir: 'dist/autokits/esm',
            format: 'es',
        },
        {
            dir: 'dist/autokits/cjs',
            format: 'cjs',
        },
    ],
    ...emotionConfigOptios,
};

export default autokitsConfig;
