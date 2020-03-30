import React from 'react';
import Color from './Color';
import Layout from '../../components/Layout';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import typography from '../../helpers/typography';

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

export default ColorsAutokit;
