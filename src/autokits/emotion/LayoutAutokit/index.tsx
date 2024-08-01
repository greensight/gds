import React from 'react';

import { Layout } from '../../../components/emotion/Layout';
import { typography } from '../../../helpers/emotion/typography';
import { Breakpoint } from '../../../types/emotion/Layout';
import { Item } from './Item';
import { useAutokitsTheme } from '../../../utils/autokits/useTheme';

/**
 * Autokit for layout tokens `theme.layout`.
 */
export const LayoutAutokit = () => {
    const { layout } = useAutokitsTheme();

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
