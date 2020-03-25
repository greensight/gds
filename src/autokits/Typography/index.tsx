import React from 'react';
import useTheme from '@utils/useTheme';
import typography from '@utils/typography';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import baseThemeTypography from '@helpers/typography';

export interface TypographyAutokitProps {
    /** Placeholder text */
    text?: string;
}

export const Typography = ({ text = 'Demo text 123' }: TypographyAutokitProps) => {
    const theme = useTheme();
    const globalFontsTheme = theme.global?.fonts;
    const fontStacksTheme = globalFontsTheme?.stacks;
    const typographyTheme = theme.typography;
    const { colors } = baseTheme;

    if (!typographyTheme)
        return (
            <div css={baseThemeTypography('body')}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Typography is not defined. Use tokens or add <strong>typography</strong> property in theme settings
                manually
            </div>
        );

    const markCss = {
        backgroundColor: colors.grey90,
        color: colors.grey20,
        padding: scale(1, true),
        borderRadius: 4,
        marginRight: scale(1),
        ...baseThemeTypography('smallBold'),
    };

    return (
        <div css={baseThemeTypography('body')}>
            {Object.keys(typographyTheme)
                .filter(name => !['breakpoints', 'stacks', 'fluid'].includes(name))
                .sort(
                    (a, b) =>
                        parseFloat(typographyTheme[b].desktop.fontSize) -
                        parseFloat(typographyTheme[a].desktop.fontSize),
                )
                .map(name => (
                    <div key={name} css={{ display: 'flex', alignItems: 'flex-end', marginBottom: scale(3) }}>
                        <div css={{ minWidth: scale(17), marginRight: scale(2) }}>
                            {typographyTheme[name].mobile && (
                                <span css={markCss}>
                                    {typographyTheme[name].fluid !== false && typographyTheme.fluid !== false
                                        ? 'F'
                                        : 'M'}
                                </span>
                            )}
                            <span css={{ color: colors.grey20, ...baseThemeTypography('body') }}>{name}</span>
                        </div>
                        <div
                            css={{
                                ...typography(name, theme),
                                color: colors.black,
                            }}
                        >
                            {text}
                        </div>
                    </div>
                ))}
            <div css={{ marginBottom: scale(2) }}>
                <p css={{ marginBottom: scale(2) }}>
                    Breakpoints: <strong>{typographyTheme.breakpoints[0]}</strong> and{' '}
                    <strong>{typographyTheme.breakpoints[1]}</strong>
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
                        <dl key={fontName} css={{ marginBottom: scale(2) }}>
                            <dt css={{ ...baseThemeTypography('bodyBold') }}>Font family</dt>
                            <dd css={{ ...baseThemeTypography('body'), marginLeft: scale(4) }}>{fontName}</dd>
                            <dt css={{ ...baseThemeTypography('bodyBold') }}>Variable font</dt>
                            <dd css={{ ...baseThemeTypography('body'), marginLeft: scale(4) }}>
                                {fontAssets.some(({ vf }) => vf) ? 'true' : 'false'}
                            </dd>
                            <dt css={{ ...baseThemeTypography('bodyBold') }}>Font stack</dt>
                            <dd css={{ ...baseThemeTypography('body'), marginLeft: scale(4) }}>
                                {fontStacksTheme?.[fontName] ? fontStacksTheme[fontName] : 'sans-serif'}
                            </dd>
                        </dl>
                    );
                })}
        </div>
    );
};

export default Typography;
