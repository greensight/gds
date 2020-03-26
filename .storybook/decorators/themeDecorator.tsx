import React from 'react';
import { DecoratorFn } from '@storybook/react';
import ThemeProvider from '@components/ThemeProvider';
import baseTheme from '@utils/baseTheme';

const themeDecorator: DecoratorFn = (storyFn) => <ThemeProvider theme={baseTheme}>{storyFn()}</ThemeProvider>;

export default themeDecorator;
