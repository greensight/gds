import React from 'react';
import { Item } from './Item';
import { Layout } from '../../components/Layout';
import { useTheme } from '../../utils/useTheme';
import { typography } from '../../helpers/typography';
import { Breakpoint } from '../../types/Layout';

/**
 * Autokit for layout tokens `theme.layout`.
 */
export const LayoutAutokit = () => {
    const theme = useTheme();
    const { layout } = theme;

    if (!layout)
        return (
            <div css={typography('body')}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Layout is not defined. Use tokens or add <strong>layout</strong> property in theme settings manually
            </div>
        );

    return (
        <Layout type="flex" direction="column" align="center">
            {(Object.entries(layout.breakpoints) as [Breakpoint, number][]).map(([name, value]) => (
                <Layout.Item key={name} css={{ width: value }}>
                    <Item breakpointName={name} breakpointValue={value} />
                </Layout.Item>
            ))}
        </Layout>
    );
};
