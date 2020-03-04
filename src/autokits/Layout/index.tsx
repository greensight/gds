import * as React from 'react';
import LayoutComponent from '@components/Layout';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import typography from '@helpers/customTypography';
import { BREAKPOINTS_NAMES } from '@helpers/constants';
import ILayout from './Layout';

const Layout: React.FC<ILayout> = () => {
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
        <LayoutComponent type="flex" direction="column" align="center">
            {Object.entries(layout.breakpoints).map(([name, value]) => (
                <LayoutComponent.Item key={name} css={{ width: value }}>
                    <LayoutItem name={name} value={value} />
                </LayoutComponent.Item>
            ))}
        </LayoutComponent>
    );
};

const LayoutItem = ({ name, value }) => {
    const theme = useTheme();
    const { colors } = baseTheme;
    const { layout } = theme;

    const layoutItemCss = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...typography('small'),
        color: colors.grey0,
    };

    const cols = getLayoutValue(layout.cols, name);
    const gap = getLayoutValue(layout.gap, name);
    const container = getLayoutValue(layout.container, name);
    const marginLeft = getLayoutValue(layout.marginLeft, name);
    const marginRight = getLayoutValue(layout.marginRight, name);
    const padding = getLayoutValue(layout.padding, name);

    const paddingCss = {
        ...layoutItemCss,
        backgroundColor: colors.tagHit,
        width: container !== 'none' ? (value - container) / 2 : padding,
    };

    const colCss = {
        ...layoutItemCss,
        backgroundColor: colors.grey90,
        width: container !== 'none' ? (container + gap) / cols - gap : (value - padding * 2 + gap) / cols - gap,
    };

    const gapCss = { ...layoutItemCss, backgroundColor: colors.warning, width: gap };

    return (
        <div>
            <div css={{ ...typography('headline'), textAlign: 'center', marginBottom: scale(2) }}>
                {value} ({name})
            </div>
            <LayoutComponent
                type="flex"
                wrap={false}
                gap={0}
                justify="center"
                css={{
                    height: scale(11),
                }}
            >
                <LayoutComponent.Item css={paddingCss}>{marginLeft || padding}</LayoutComponent.Item>
                {new Array(cols - 1).fill().map((item, index) => (
                    <React.Fragment key={index}>
                        <LayoutComponent.Item css={colCss} />
                        <LayoutComponent.Item css={gapCss}>{gap}</LayoutComponent.Item>
                    </React.Fragment>
                ))}
                <LayoutComponent.Item css={colCss} />
                <LayoutComponent.Item css={paddingCss}>{marginRight || padding}</LayoutComponent.Item>
            </LayoutComponent>
        </div>
    );
};

const getLayoutValue = (param, name) => {
    const breakpointsAbove = BREAKPOINTS_NAMES.slice(0, BREAKPOINTS_NAMES.indexOf(name) + 1);
    let value;
    breakpointsAbove.reverse().some(name => {
        if (param[name] === undefined) return false;
        value = param[name];
        return true;
    });
    return value;
};

export default Layout;
