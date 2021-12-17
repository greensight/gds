import React from 'react';
import { Color } from './Color';
import { Layout } from '../../components/Layout';
import { useTheme } from '../../utils/useTheme';
import { scale } from '../../utils/scale';
import { typography } from '../../helpers/typography';

/**
 * Autokit for palettes tokens `theme.palettes`.
 */
export const PalettesAutokit = () => {
    const theme = useTheme();
    const { palettes } = theme;

    if (!palettes)
        return (
            <div css={typography('body')}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Palettes are not defined. Use tokens or add <strong>palettes</strong> property in theme settings
                manually
            </div>
        );

    return (
        <Layout auto={scale(30)} gap={scale(8)}>
            {Object.keys(palettes)
                .filter((name) => Array.isArray(palettes[name]))
                .map((name) => (
                    <Layout.Item key={name}>
                        <div
                            css={{
                                textAlign: 'center',
                                ...typography('headline'),
                                marginBottom: scale(2),
                                marginTop: scale(2),
                            }}
                        >
                            {name}
                        </div>
                        {palettes[name].map((color, index) => (
                            <Color key={color} color={color} index={index} />
                        ))}
                    </Layout.Item>
                ))}
        </Layout>
    );
};
