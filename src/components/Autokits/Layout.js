import React from 'react';
import useTheme from '../../scripts/useTheme';
import typography from '../../scripts/customTypography';
import scale from '../../scripts/scale';
import Layout from '../Layout';
import baseTheme from '../../scripts/baseTheme';
import { BREAKPOINTS_NAMES } from '../../scripts/constants';

const getLayoutValue = (param, bpName) => {
    const breakpointsAbove = BREAKPOINTS_NAMES.slice(0, BREAKPOINTS_NAMES.indexOf(bpName) + 1);
    let value;
    breakpointsAbove.reverse().some(bpName => {
        if (param[bpName] === undefined) return false;
        value = param[bpName];
        return true;
    });
    return value;
};

const LayoutComponent = () => {
    const theme = useTheme();
    const { colors } = baseTheme.app;
    const { layout } = theme;

    const layoutItemCss = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...typography('small'),
        color: colors.grey0,
    };

    return (
        <Layout type="flex" direction="column" align="center">
            {Object.entries(layout.breakpoints).map(([bpName, bpValue]) => {
                const cols = getLayoutValue(layout.cols, bpName);
                const gap = getLayoutValue(layout.gap, bpName);
                const container = getLayoutValue(layout.container, bpName);
                const marginLeft = getLayoutValue(layout.marginLeft, bpName);
                const marginRight = getLayoutValue(layout.marginRight, bpName);
                const padding = getLayoutValue(layout.padding, bpName);

                const paddingCss = {
                    ...layoutItemCss,
                    backgroundColor: colors.tagHit,
                    width: container !== 'none' ? (bpValue - container) / 2 : padding,
                };

                const colCss = {
                    ...layoutItemCss,
                    backgroundColor: colors.grey90,
                    width:
                        container !== 'none'
                            ? (container + gap) / cols - gap
                            : (bpValue - padding * 2 + gap) / cols - gap,
                };

                const gapCss = { ...layoutItemCss, backgroundColor: colors.warning, width: gap };

                return (
                    <Layout.Item key={bpName} css={{ width: bpValue }}>
                        <div css={{ ...typography('headline'), textAlign: 'center', marginBottom: scale(2) }}>
                            {bpValue} ({bpName})
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
                            {new Array(cols - 1).fill().map((item, index) => (
                                <React.Fragment key={index}>
                                    <Layout.Item css={colCss} />
                                    <Layout.Item css={gapCss}>{gap}</Layout.Item>
                                </React.Fragment>
                            ))}
                            <Layout.Item css={colCss} />
                            <Layout.Item css={paddingCss}>{marginRight || padding}</Layout.Item>
                        </Layout>
                    </Layout.Item>
                );
            })}
        </Layout>
    );
};

export default LayoutComponent;
