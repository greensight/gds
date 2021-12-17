import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from '../../src/components/ThemeProvider';
import { baseTheme } from '../../src/utils/baseTheme';

const themeDecorator: DecoratorFn = (storyFn) => <ThemeProvider theme={baseTheme}>{storyFn()}</ThemeProvider>;

export default themeDecorator;
