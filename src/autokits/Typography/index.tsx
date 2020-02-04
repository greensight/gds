import * as React from 'react';
import useTheme from '../../utils/useTheme';
import typography from '../../utils/typography';
import scale from '../../utils/scale';
import baseTheme from '../../helpers/baseTheme';
import customTypography from '../../helpers/customTypography';
import ITypography from './Typography';

// TODO Проверить тянутся ли шрифты (нет) в Storybook на ЭВМ без локального

const Typography: React.FC<ITypography> = ({ text = 'Demo text 123' }) => {
    const theme = useTheme();
    const globalFontsTheme = theme.global && theme.global.fonts;
    const typographyTheme = theme.typography;
    const fontStacksTheme = typographyTheme && typographyTheme.stacks;
    const { colors } = baseTheme;

    const markCss = {
        backgroundColor: colors.grey90,
        color: colors.grey20,
        padding: scale(1, true),
        borderRadius: 4,
        marginRight: scale(1),
        ...customTypography('smallBold'),
    };

    return (
        <div>
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
                            <span css={{ color: colors.grey20, ...customTypography('body') }}>{name}</span>
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
            <div>
                <p>
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
