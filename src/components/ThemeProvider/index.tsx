import React from 'react';
import { Global as EmotionGlobal, CSSObject } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import 'focus-visible';
import 'normalize.css';
import typography from '../../utils/typography';
import baseTheme from '../../utils/baseTheme';
import Theme from '../../types/Theme';

export interface ThemeProviderProps {
    /** Theme object. */
    theme: Theme | typeof baseTheme;
    /** Project code with access to provided theme. */
    children: React.ReactNode;
}

/**
 * Component for providing theme context for app.
 */
const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
    const global = theme.global || baseTheme.global;
    const fonts = global.fonts || baseTheme.global.fonts;
    const { selection, focus, body, css } = global.base || baseTheme.global.base;

    const fontStyles = Object.entries(fonts.fontFace).map(([family, types]) =>
        types.map(({ woff2, woff, vf, weight, italic, css }) => {
            const woff2Src = woff2 ? `url(${woff2}) format('woff2')` : undefined;
            const woffSrc = woff ? `url(${woff}) format('woff')` : undefined;
            const vfSrc = vf
                ? `url(${vf}) format('woff2 supports variations'), url(${vf}) format('woff2-variations')`
                : undefined;

            if (!vf) {
                if (!woff2)
                    console.warn(
                        `Add woff2 asset to ${family} font (weight: ${weight || 400}${italic ? ' italic: true' : ''})`,
                    );
                if (!woff)
                    console.warn(
                        `Add woff asset to ${family} font (weight: ${weight || 400}${italic ? ' italic: true' : ''})`,
                    );
            } else {
                if (woff2) console.warn(`You don't need to specify woff2 asset with ${family} variable font`);
                if (woff) console.warn(`You don't need to specify woff asset with ${family} variable font`);
            }

            const src = !vfSrc ? [woff2Src, woffSrc].join(', ') : vfSrc;

            return {
                '@font-face': {
                    fontFamily: `${family}${vf ? ' VF' : ''}`,
                    src,
                    fontDisplay: 'swap',
                    fontWeight: weight,
                    fontStyle: italic && 'italic',
                    ...css,
                },
            } as CSSObject;
        }),
    );

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
            <EmotionGlobal styles={[fontStyles, baseStyles, css]} />
            {children}
        </EmotionThemeProvider>
    );
};

export default ThemeProvider;
