import React from 'react';

import { Layout } from '../../components/Layout';
import { typography } from '../../helpers/typography';
import { scale } from '../../utils/scale';
import { useTheme } from '../../utils/useTheme';
import { Shadow } from './Shadow';

/**
 * Autokit for shadows tokens `theme.shadows`.
 */
export const ShadowsAutokit = () => {
    const theme = useTheme();
    const { shadows } = theme;

    if (!shadows)
        return (
            <div css={typography('body')}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Shadows are not defined. Use tokens or add <strong>shadows</strong> property in theme settings manually
            </div>
        );

    return (
        <Layout auto={scale(20)} gap={scale(8)}>
            {Object.keys(shadows).map((name) => (
                <Layout.Item key={name}>
                    <Shadow name={name} value={shadows[name]} />
                </Layout.Item>
            ))}
        </Layout>
    );
};
