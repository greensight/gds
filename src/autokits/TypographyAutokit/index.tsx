import React from 'react';

import { typography as baseThemeTypography } from '../../helpers/typography';
import { baseTheme } from '../../utils/baseTheme';
import { scale } from '../../utils/scale';
import { typography } from '../../utils/typography';
import { useTheme } from '../../utils/useTheme';

export interface TypographyAutokitProps {
    /** Placeholder text. */
    text?: string;
}

/**
 * Autokit for typography tokens `theme.typography` and fonts settings `theme.global.fonts`.
 */
export const TypographyAutokit = ({ text = 'Demo text 123' }: TypographyAutokitProps) => {
    const theme = useTheme();
    const globalFontsTheme = theme.global?.fonts;
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
            {Object.keys(typographyTheme.styles)
                .sort(
                    (a, b) =>
                        parseFloat(typographyTheme.styles[b].desktop.fontSize) -
                        parseFloat(typographyTheme.styles[a].desktop.fontSize),
                )
                .map((name) => {
                    let isFluid = true;
                    const fluidSettings = globalFontsTheme?.fluid;
                    if (fluidSettings !== undefined) {
                        isFluid = Array.isArray(fluidSettings) ? !fluidSettings.includes(name) : fluidSettings;
                    }
                    return (
                        <div key={name} css={{ display: 'flex', alignItems: 'flex-end', marginBottom: scale(3) }}>
                            <div css={{ minWidth: scale(17), marginRight: scale(2) }}>
                                {typographyTheme.styles[name].mobile && (
                                    <span css={markCss}>{isFluid ? 'F' : 'M'}</span>
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
                    );
                })}
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
            {globalFontsTheme?.families ? (
                Object.entries(globalFontsTheme.families).map(([family, familySettings]) => (
                    <dl key={family} css={{ marginBottom: scale(2) }}>
                        <dt css={{ ...baseThemeTypography('bodyBold') }}>Font family</dt>
                        <dd css={{ ...baseThemeTypography('body'), marginLeft: scale(4) }}>{family}</dd>
                        <dt css={{ ...baseThemeTypography('bodyBold') }}>Variable font</dt>
                        <dd css={{ ...baseThemeTypography('body'), marginLeft: scale(4) }}>
                            {familySettings.vf ? 'true' : 'false'}
                        </dd>
                        <dt css={{ ...baseThemeTypography('bodyBold') }}>Font stack</dt>
                        <dd css={{ ...baseThemeTypography('body'), marginLeft: scale(4) }}>
                            {familySettings.stack || 'sans-serif'}
                        </dd>
                    </dl>
                ))
            ) : (
                <div css={baseThemeTypography('body')}>
                    <span role="img" aria-label="Error">
                        ⛔️
                    </span>{' '}
                    Specify <strong>global.fonts.families</strong> in theme settings to add fonts info in autokit.
                </div>
            )}
        </div>
    );
};
