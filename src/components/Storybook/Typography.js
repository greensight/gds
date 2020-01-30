import React from 'react';
import useTheme from '../../scripts/useTheme';
import customTypography from '../../scripts/customTypography';
import typography from '../../scripts/typography';
import scale from '../../scripts/scale';

// TODO Есть проблема с рендером шрифтов на Windows - прогнать

const Typography = ({ text = 'Demo text 123' }) => {
    const theme = useTheme();
    const globalFontsTheme = theme.global && theme.global.fonts;
    const fontStacksTheme = theme.typography && theme.typography.stacks;

    const markCss = {
        backgroundColor: theme.colors.grey90,
        color: theme.colors.grey20,
        padding: scale(1, true),
        borderRadius: 4,
        marginRight: scale(1),
        ...customTypography('smallBold'),
    };

    return (
        <div>
            <ul>
                {Object.keys(theme.typography)
                    .filter(name => !['breakpoints', 'stacks', 'fluid'].includes(name))
                    .sort(
                        (a, b) =>
                            parseFloat(theme.typography[b].desktop.fontSize) -
                            parseFloat(theme.typography[a].desktop.fontSize),
                    )
                    .map(name => (
                        <li key={name} css={{ display: 'flex', alignItems: 'flex-end', marginBottom: scale(3) }}>
                            <div css={{ minWidth: scale(17), marginRight: scale(2) }}>
                                {theme.typography[name].mobile && (
                                    <span css={markCss}>
                                        {theme.typography[name].fluid !== false && theme.typography.fluid !== false
                                            ? 'F'
                                            : 'M'}
                                    </span>
                                )}
                                <span css={{ color: theme.colors.grey20, ...customTypography('body') }}>{name}</span>
                            </div>
                            <div
                                css={{
                                    ...typography(name, theme),
                                    color: theme.colors.black,
                                }}
                            >
                                {text}
                            </div>
                        </li>
                    ))}
            </ul>
            <div>
                <p>
                    Breakpoints: <strong>{theme.typography.breakpoints[0]}</strong> and{' '}
                    <strong>{theme.typography.breakpoints[1]}</strong>
                </p>
                <p>
                    <span css={markCss}>F</span> - &quot;F for fluid&quot;, style has adaptive variation with fluid
                    typography
                </p>
                <p>
                    <span css={markCss}>M</span> - &quot;M for mobile&quot;, style has adaptive version without fluid
                    typography
                </p>
            </div>
            {globalFontsTheme &&
                Object.entries(globalFontsTheme).map(([fontName, fontAssets]) => {
                    return (
                        <dl>
                            <dt css={{ ...customTypography('bodyBold') }}>Font family</dt>
                            <dd css={{ ...customTypography('body') }}>{fontName}</dd>
                            <dt css={{ ...customTypography('bodyBold') }}>Variable font</dt>
                            <dd css={{ ...customTypography('body') }}>
                                {fontAssets.some(({ vf }) => vf) ? 'true' : 'false'}
                            </dd>
                            <dt css={{ ...customTypography('bodyBold') }}>Font stack</dt>
                            <dd css={{ ...customTypography('body') }}>
                                {fontStacksTheme && fontStacksTheme[fontName]
                                    ? fontStacksTheme[fontName]
                                    : 'sans-serif'}
                            </dd>
                        </dl>
                    );
                })}
        </div>
    );
};

export default Typography;
