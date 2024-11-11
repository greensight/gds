import { CSSObject, Global as EmotionGlobal, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import 'normalize.css';
import React, { FC, useMemo } from 'react';

import { Theme } from '../../../types/emotion/Theme';
import { baseTheme } from '../../../utils/emotion/baseTheme';
import { typography } from '../../../utils/emotion/typography';

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
    const { selection, focus, body, css } = global.base || baseTheme.global.base;
    const fontFaceStyles = useMemo(() => global.fonts?.fontFace || [], [global.fonts?.fontFace]);

    const baseStyles = useMemo<CSSObject[]>(
        () => [
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
                '.js-focus-visible :focus-visible': {
                    outline: 'none',
                },
                'html, body': {
                    minHeight: '100%',
                },
                body: {
                    ...(body &&
                        typography(body.typography, theme.typography ? (theme as Theme) : (baseTheme as Theme))),
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
        ],
        [
            body,
            focus?.color,
            focus?.css,
            focus?.offset,
            focus?.width,
            selection?.bg,
            selection?.color,
            selection?.css,
            theme,
        ],
    );

    const globalStyles = useMemo(() => [fontFaceStyles, baseStyles, css], [baseStyles, css, fontFaceStyles]);

    return (
        <EmotionThemeProvider theme={theme as Theme}>
            <EmotionGlobal styles={globalStyles} />
            {children}
        </EmotionThemeProvider>
    );
};
