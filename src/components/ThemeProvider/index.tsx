import * as React from 'react';
import { Global as EmotionGlobal } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import 'focus-visible';
import normalize from 'normalize.css';
import baseTheme from '../../scripts/baseTheme';
import typography from '../../scripts/typography';
import IThemeProvider from './ThemeProvider';

// TODO Добавить в доку focus-visible
// TODO Обработать normalize
// TODO Отписать по base
// TODO Добавить про импорты шрифтов
// TODO Добавить интерфейсы токенов

const ThemeProvider: React.FC<IThemeProvider> = ({ theme = baseTheme, children }) => {
    const { global } = theme.app;
    const fonts = global.fonts || baseTheme.app.global.fonts;
    const { selection, focus, body } = global.base || baseTheme.app.global.base;
    const { css } = global;

    const fontStyles = Object.entries(fonts).map(([family, types]) =>
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
            };
        }),
    );

    const baseStyles = [
        {
            '*, ::before, ::after': {
                boxSizing: 'border-box',
                padding: 0,
                margin: 0,
            },
            '::selection': {
                color: selection && selection.color,
                backgroundColor: selection && selection.bg,
                ...(selection && selection.css),
            },
            ':focus': {
                outline: focus && `${focus.width || 2}px solid ${focus.color || baseTheme.app.colors.black}`,
                outlineOffset: focus && focus.offset,
                ...(focus && focus.css),
            },
            '.js-focus-visible :focus:not(.focus-visible)': {
                outline: 'none',
            },
            'html, body': {
                minHeight: '100%',
            },
            body: {
                ...(body && typography(body.typography, theme.app)),
                color: body && body.color,
                backgroundColor: body && body.bg,
                ...(body && body.css),
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
            'button, [type="button"], [type="reset"], [type="submit"]': {
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
        },
    ];

    return (
        <EmotionThemeProvider theme={theme}>
            <EmotionGlobal styles={[normalize, fontStyles, baseStyles, css]} />
            {children}
        </EmotionThemeProvider>
    );
};

export default ThemeProvider;
