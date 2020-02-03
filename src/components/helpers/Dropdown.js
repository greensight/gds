import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import baseTheme from '../../scripts/baseTheme';
import scale from '../../scripts/scale';
import CheckCircle from '../../images/icons/tokens/medium/checkCircle.svg';

const Dropdown = ({ children, content, ...props }) => {
    return (
        <Tippy
            content={<DropdownContent>{content}</DropdownContent>}
            trigger="click"
            arrow={false}
            animation="shift-away"
            onShow={instance =>
                setTimeout(() => {
                    instance.hide();
                }, 1000)
            }
            {...props}
        >
            {children}
        </Tippy>
    );
};

const DropdownContent = ({ children }) => {
    const { colors } = baseTheme;

    return (
        <>
            <CheckCircle fill={colors.success} css={{ marginRight: scale(1), verticalAlign: 'middle' }} />
            {children}
        </>
    );
};

export default Dropdown;
