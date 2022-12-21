import React from 'react';

import { Layout } from '../../components/Layout';
import { BREAKPOINTS_NAMES } from '../../helpers/constants';
import { typography } from '../../helpers/typography';
import { Breakpoint, LayoutTheme } from '../../types/Layout';
import { baseTheme } from '../../utils/baseTheme';
import { scale } from '../../utils/scale';
import { useTheme } from '../../utils/useTheme';

export interface ItemProps {
    /** Breakpoint name. */
    breakpointName: Breakpoint;
    /** Breakpoint value. */
    breakpointValue: number;
}

export const Item = ({ breakpointName, breakpointValue }: ItemProps) => {
    const { colors } = baseTheme;
    const theme = useTheme();
    const layout = theme.layout as LayoutTheme;

    const cols = getLayoutValue(layout.cols, breakpointName);
    const gap = getLayoutValue(layout.gap, breakpointName);
    const container = getLayoutValue(layout.container, breakpointName);
    const marginLeft = getLayoutValue(layout.marginLeft, breakpointName);
    const marginRight = getLayoutValue(layout.marginRight, breakpointName);
    const padding = getLayoutValue(layout.padding, breakpointName);

    const layoutItemCss = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...typography('small'),
        color: colors.grey0,
    };

    const paddingCss = {
        ...layoutItemCss,
        backgroundColor: colors.tagHit,
        width: container !== 'none' ? (breakpointValue - container) / 2 : padding,
    };

    const colCss = {
        ...layoutItemCss,
        backgroundColor: colors.grey90,
        width:
            container !== 'none' ? (container + gap) / cols - gap : (breakpointValue - padding * 2 + gap) / cols - gap,
    };

    const gapCss = { ...layoutItemCss, backgroundColor: colors.warning, width: gap };

    return (
        <div>
            <div css={{ ...typography('headline'), textAlign: 'center', marginBottom: scale(2) }}>
                {breakpointValue} ({breakpointName})
            </div>
            <Layout
                type="flex"
                wrap={false}
                gap={0}
                justify="center"
                css={{
                    height: scale(11),
                }}
            >
                <Layout.Item css={paddingCss}>{marginLeft || padding}</Layout.Item>
                {new Array(cols - 1).fill('').map((item, index) => (
                    <React.Fragment key={index}>
                        <Layout.Item css={colCss} />
                        <Layout.Item css={gapCss}>{gap}</Layout.Item>
                    </React.Fragment>
                ))}
                <Layout.Item css={colCss} />
                <Layout.Item css={paddingCss}>{marginRight || padding}</Layout.Item>
            </Layout>
        </div>
    );
};

const getLayoutValue = (param: LayoutTheme[keyof LayoutTheme], name: Breakpoint) => {
    const breakpointsAbove = BREAKPOINTS_NAMES.slice(0, BREAKPOINTS_NAMES.indexOf(name) + 1);
    let value: any;
    breakpointsAbove.reverse().some((name) => {
        if (param[name] === undefined) return false;
        value = param[name];
        return true;
    });
    return value;
};
