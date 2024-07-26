import { DecoratorFn } from '@storybook/react';
import React from 'react';

import { scale } from '../../src/utils/common/scale';

const centeredDecorator: DecoratorFn = (storyFn) => (
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
