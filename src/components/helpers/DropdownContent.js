import React from 'react';
import baseTheme from '../../scripts/baseTheme';
import scale from '../../scripts/scale';
import CheckCircle from '../../images/icons/tokens/medium/checkCircle.svg';

const DropdownContent = ({ children }) => {
    const { colors } = baseTheme.app;

    return (
        <>
            <CheckCircle fill={colors.success} css={{ marginRight: scale(1), verticalAlign: 'middle' }} />
            {children}
        </>
    );
};

export default DropdownContent;
