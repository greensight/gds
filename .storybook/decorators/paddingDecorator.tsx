import React from 'react';
import { DecoratorFn } from '@storybook/react';
import scale from '../../src/utils/scale';

const paddingDecorator: DecoratorFn = (storyFn) => <div css={{ padding: scale(2) }}>{storyFn()}</div>;

export default paddingDecorator;
