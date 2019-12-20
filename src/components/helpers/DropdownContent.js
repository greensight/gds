import React from 'react';
import useTheme from '../../scripts/useTheme';
import CheckIcon from '../../images/icons/check.svg';

const DropdownContent = ({ children }) => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <>
            <CheckIcon css={{ fill: colors.function.success, marginRight: 8, verticalAlign: 'middle' }} />
            {children}
        </>
    );
};

export default DropdownContent;
