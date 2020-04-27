import React from 'react';
import Legend from '../../components/Legend';
import Layout from '../../components/Layout';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import LegendTheme from '../../types/Legend';
import { SVGRIcon } from '../../types/Utils';

export interface LegendAutokitProps {
    /** Placeholder text. */
    text?: string;
    /** Placeholder hint. */
    hint?: string;
    /** Placeholder optional text. */
    optional?: string;
    /** Placeholder for icon (overrides placeholder from theme). */
    Icon?: SVGRIcon;
}

/**
 * Autokit for `Legend` component.
 */
const LegendAutokit = ({ text = 'Legend', hint = 'hint', optional = '(optional)', Icon }: LegendAutokitProps) => {
    const theme = useTheme();
    const { componentTheme } = useComponentTheme('Legend');
    const legendTheme = componentTheme as LegendTheme;
    const PlaceholderIcon = Icon || theme.global?.placeholder || baseTheme.global?.placeholder;

    return (
        <Layout
            cols={{ xxxl: Object.keys(legendTheme.sizes).length, xxs: 1 }}
            gap={scale(3)}
            justify="start"
            align="end"
        >
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName}>
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} hint={hint}>
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} IconBefore={PlaceholderIcon}>
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} IconAfter={PlaceholderIcon}>
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} IconBefore={PlaceholderIcon} IconAfter={PlaceholderIcon}>
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} block IconBefore={PlaceholderIcon} IconAfter={PlaceholderIcon}>
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} horizontalAlignment="center">
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} horizontalAlignment="right">
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} hiddenLegend>
                    {text}
                </Legend>
            ))}
            {Object.keys(legendTheme.sizes).map((sizeName) => (
                <Legend key={sizeName} size={sizeName} optional={optional}>
                    {text}
                </Legend>
            ))}
        </Layout>
    );
};

export default LegendAutokit;
