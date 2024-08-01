import React, { CSSProperties } from 'react';

import { BREAKPOINTS_NAMES } from '../../../helpers/common/constants';
import { Breakpoint, LayoutTheme } from '../../../types/emotion/Layout';
import { useAutokitsTheme } from '../../../autokits';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface ItemProps {
    /** Breakpoint name. */
    breakpointName: Breakpoint;
    /** Breakpoint value. */
    breakpointValue: number;
}

interface IStyles {
    className: string;
    style: CSSProperties;
}

export const Item = ({ breakpointName, breakpointValue }: ItemProps) => {
    const theme = useAutokitsTheme();
    const layout = theme.layout as LayoutTheme;

    const cols = getLayoutValue(layout.cols, breakpointName);
    const gap = getLayoutValue(layout.gap, breakpointName);
    const container = getLayoutValue(layout.container, breakpointName);
    const marginLeft = getLayoutValue(layout.marginLeft, breakpointName);
    const marginRight = getLayoutValue(layout.marginRight, breakpointName);
    const padding = getLayoutValue(layout.padding, breakpointName);

    const paddingStyles = {
        className: cn(styles.layoutAutokitItemLayout_item, styles.layoutAutokitItemLayout_item__padding),
        style: {
            '--layout-item-padding-width': `${container !== 'none' ? (breakpointValue - container) / 2 : padding}px`,
        },
    } as IStyles;

    const colStyles = {
        className: cn(styles.layoutAutokitItemLayout_item, styles.layoutAutokitItemLayout_item__col),
        style: {
            '--layout-item-col-width': `${
                container !== 'none'
                    ? (container + gap) / cols - gap
                    : (breakpointValue - padding * 2 + gap) / cols - gap
            }px`,
        },
    } as IStyles;

    const gapStyles = {
        className: cn(styles.layoutAutokitItemLayout_item, styles.layoutAutokitItemLayout_item__gap),
        style: {
            '--layout-item-gap-width': `${gap}px`,
        },
    } as IStyles;
    return (
        <div>
            <div className={styles.layoutAutokitItem_title}>
                {breakpointValue} ({breakpointName})
            </div>
            <div className={cn(styles.layoutAutokitItem_layout, styles.layoutAutokitItemLayout)}>
                <div {...paddingStyles}>{marginLeft || padding}</div>
                {new Array(cols - 1).fill('').map((item, index) => (
                    <React.Fragment key={index}>
                        <div {...colStyles} />
                        <div {...gapStyles}>{gap}</div>
                    </React.Fragment>
                ))}
                <div {...colStyles} />
                <div {...paddingStyles}>{marginRight || padding}</div>
            </div>
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
