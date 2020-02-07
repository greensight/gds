import React from 'react';
import scale from '../../src/utils/scale';

const centeredDecorator = storyFn => (
    <div
        css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: scale(2),
        }}
    >
        {storyFn()}
    </div>
);

export default centeredDecorator;
