import { DecoratorFn } from '@storybook/react';
import React from 'react';

import { scale } from '../../src/utils/common/scale';

const paddingDecorator: DecoratorFn = (storyFn) => <div css={{ padding: scale(2) }}>{storyFn()}</div>;

export default paddingDecorator;
