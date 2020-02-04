import React from 'react';
import ThemeProvider from '../../src/components/ThemeProvider';
import baseTheme from '../../src/helpers/baseTheme';

const themeDecorator = storyFn => <ThemeProvider theme={baseTheme}>{storyFn()}</ThemeProvider>;

export default themeDecorator;
