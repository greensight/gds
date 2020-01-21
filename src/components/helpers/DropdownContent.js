import React from 'react';
import useTheme from '../../scripts/useTheme';
import major from '../../scripts/major';
import CheckCircle from '../../images/icons/tokens/medium/checkCircle.svg';

const DropdownContent = ({ children }) => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <>
            <CheckCircle fill={colors.success} css={{ marginRight: major(1), verticalAlign: 'middle' }} />
            {children}
        </>
    );
};

export default DropdownContent;
