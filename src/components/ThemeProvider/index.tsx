import React, { FC } from 'react';
import { Global as EmotionGlobal, CSSObject } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import 'focus-visible';
import 'normalize.css';
import { typography } from '../../utils/typography';
import { baseTheme } from '../../utils/baseTheme';
import { Theme } from '../../types/Theme';

export interface ThemeProviderProps {
    /** Theme object. */
    theme: Theme | typeof baseTheme;
    /** Project code with access to provided theme. */
    children: React.ReactNode;
}

/**
 * Component for providing theme context for app.
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
    const global = theme.global || baseTheme.global;
    const fontFaceStyles = global.fonts?.fontFace || [];
    const { selection, focus, body, css } = global.base || baseTheme.global.base;

    const baseStyles: CSSObject[] = [
        {
            '*, ::before, ::after': {
                boxSizing: 'border-box',
                padding: 0,
                margin: 0,
            },
            '::selection': {
                color: selection?.color,
                backgroundColor: selection?.bg,
                ...selection?.css,
            },
            ':focus': {
                outline: `${focus?.width || 2}px solid ${focus?.color || baseTheme.colors.black}`,
                outlineOffset: focus?.offset,
                ...focus?.css,
            },
            '.js-focus-visible :focus:not(.focus-visible)': {
                outline: 'none',
            },
            'html, body': {
                minHeight: '100%',
            },
            body: {
                ...(body && typography(body.typography, theme.typography ? (theme as Theme) : (baseTheme as Theme))),
                color: body?.color,
                backgroundColor: body?.bg,
                ...body?.css,
            },
            img: {
                maxWidth: '100%',
                height: 'auto',
            },
            a: {
                display: 'inline-block',
                textDecoration: 'none',
                color: 'inherit',
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0,
            },
            'ul li, ol li': {
                listStyle: 'none',
            },
            button: {
                border: 'none',
                background: 'none',
                cursor: 'pointer',
            },
            'input[type="number"]': {
                appearance: 'textfield',
            },
            'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button': {
                margin: 0,
                appearance: 'none',
            },
            fieldset: {
                padding: 0,
                border: 'none',
            },
        },
    ];
    return (
        <EmotionThemeProvider theme={theme as Theme}>
            <EmotionGlobal styles={[fontFaceStyles, baseStyles, css]} />
            {children}
        </EmotionThemeProvider>
    );
};
