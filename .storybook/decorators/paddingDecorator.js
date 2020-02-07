import React from 'react';
import scale from '../../src/utils/scale';

const paddingDecorator = storyFn => <div css={{ padding: scale(2) }}>{storyFn()}</div>;

export default paddingDecorator;
