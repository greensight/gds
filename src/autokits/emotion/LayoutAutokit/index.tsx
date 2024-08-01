import React from 'react';

import { Breakpoint } from '../../../types/emotion/Layout';
import { Item } from './Item';
import { useAutokitsTheme } from '../../../utils/autokits/useTheme';
import styles from './styles.module.scss';

/**
 * Autokit for layout tokens `theme.layout`.
 */
export const LayoutAutokit = () => {
    const { layout } = useAutokitsTheme();

    if (!layout)
        return (
            <div className={styles.layoutAutokitError}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Layout is not defined. Use tokens or add <strong>layout</strong> property in theme settings manually
            </div>
        );

    return (
        <div className={styles.layoutAutokit}>
            {(Object.entries(layout.breakpoints) as [Breakpoint, number][]).map(([name, value]) => (
                <div key={name} style={{ width: value }}>
                    <Item breakpointName={name} breakpointValue={value} />
                </div>
            ))}
        </div>
    );
};
