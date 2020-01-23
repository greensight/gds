import React from 'react';
import baseTheme from '../../scripts/baseTheme';
import major from '../../scripts/major';
import CheckCircle from '../../images/icons/tokens/medium/checkCircle.svg';

const DropdownContent = ({ children }) => {
    const { colors } = baseTheme.app;

    return (
        <>
            <CheckCircle fill={colors.success} css={{ marginRight: major(1), verticalAlign: 'middle' }} />
            {children}
        </>
    );
};

export default DropdownContent;
