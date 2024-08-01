import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';

import { ThemeProvider } from '../src/components/emotion/ThemeProvider';
import { ScssThemeProvider } from '../src/components/scss/ThemeProvider';
import { AutokitsThemeProvider } from '../src/autokits/ThemeProvider';
import { baseTheme } from '../src/utils/emotion/baseTheme';
import gridLayoutStyles from './scss/gridLayout.module.scss';
import gridLayoutItemStyles from './scss/gridLayoutItem.module.scss';
import flexLayoutStyles from './scss/flexLayout.module.scss';
import flexLayoutItemStyles from './scss/flexLayoutItem.module.scss';
import containerStyles from './scss/container.module.scss';

export const parameters = {
    options: { showRoots: true },
    grid: { cellSize: 8 },
    viewport: { viewports: INITIAL_VIEWPORTS },
    backgrounds: { values: Object.entries(baseTheme.colors).map(([name, value]) => ({ name, value })) },
};

const componentStyles = {
    gridLayout: {
        index: gridLayoutStyles,
        item: gridLayoutItemStyles,
    },
    flexLayout: {
        index: flexLayoutStyles,
        item: flexLayoutItemStyles,
    },
    container: containerStyles,
};

const scssState = {
    styles: componentStyles,
};

export const decorators = [
    (Story) => {
        return (
            <AutokitsThemeProvider theme={baseTheme}>
                <ThemeProvider theme={baseTheme}>
                    <ScssThemeProvider state={scssState}>
                        <Story />
                    </ScssThemeProvider>
                </ThemeProvider>
            </AutokitsThemeProvider>
        );
    },
];
