import { getEntries } from './utils/entires';
import { emotionConfigOptios } from './utils/emotionConfigOptios';

const emotionConfig = {
    input: {
        index: 'src/emotion.ts',
        ...getEntries('src/components/emotion', true),
        ...getEntries('src/utils/emotion'),
        // Leave for inverse dependency with the previous version
        ...getEntries('src/utils/common'),
    },
    output: [
        {
            dir: 'dist/emotion/esm',
            format: 'esm',
        },
        {
            dir: 'dist/emotion/cjs',
            format: 'cjs',
        },
    ],
    ...emotionConfigOptios,
};

export default emotionConfig;
