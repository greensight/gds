import Tippy, { TippyProps } from '@tippy.js/react';
import React, { FC } from 'react';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/tippy.css';

import CheckCircle from '../icons/tokens/medium/checkCircle.svg';
import { baseTheme } from '../utils/baseTheme';
import { scale } from '../utils/scale';

/**
 * Tooltip with success icon. Helper component for show after successful clipboard copy.
 */
export const Tooltip: FC<TippyProps> = ({ children, content, ...props }) => {
    const { colors } = baseTheme;

    return (
        <Tippy
            content={
                <>
                    <CheckCircle fill={colors?.success} css={{ marginRight: scale(1), verticalAlign: 'middle' }} />
                    {content}
                </>
            }
            trigger="click"
            arrow={false}
            animation="shift-away"
            onShow={(instance) => {
                setTimeout(() => {
                    instance.hide();
                }, 1000);
            }}
            {...props}
        >
            {children}
        </Tippy>
    );
};
