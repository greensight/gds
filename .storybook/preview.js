import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';

import { ThemeProvider } from '../src/components/emotion/ThemeProvider';
import { baseTheme } from '../src/utils/emotion/baseTheme';

export const parameters = {
    options: { showRoots: true },
    grid: { cellSize: 8 },
    viewport: { viewports: INITIAL_VIEWPORTS },
    backgrounds: { values: Object.entries(baseTheme.colors).map(([name, value]) => ({ name, value })) },
};

export const decorators = [
    (Story) => {
        return (
            <ThemeProvider theme={baseTheme}>
                <Story />
            </ThemeProvider>
        );
    },
];
