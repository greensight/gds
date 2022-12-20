import React from 'react';

import { Layout } from '../../components/Layout';
import { typography } from '../../helpers/typography';
import { scale } from '../../utils/scale';
import { useTheme } from '../../utils/useTheme';
import { Color } from './Color';

/**
 * Autokit for colors tokens `theme.colors`.
 */
export const ColorsAutokit = () => {
    const theme = useTheme();
    const { colors } = theme;

    if (!colors)
        return (
            <div css={typography('body')}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Colors are not defined. Use tokens or add <strong>colors</strong> property in theme settings manually
            </div>
        );

    return (
        <Layout auto={scale(20)} gap={scale(8)}>
            {Object.keys(colors).map((name) => (
                <Layout.Item key={name}>
                    <Color name={name} value={colors[name]} />
                </Layout.Item>
            ))}
        </Layout>
    );
};
