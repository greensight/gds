import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../../scripts/useTheme';
import DropdownContent from '../helpers/DropdownContent';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import typography from '../../scripts/customTypography';
import major from '../../scripts/major';

const Shadows = () => {
    const theme = useTheme();
    const { shadows } = theme;

    return (
        <ul
            css={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${major(20)}px, 1fr))`,
                gridGap: major(8),
            }}
        >
            {Object.keys(shadows).map(name => (
                <Shadow key={name} name={name} value={shadows[name]} />
            ))}
        </ul>
    );
};

const Shadow = ({ name, value }) => {
    const theme = useTheme();
    const { colors } = theme;

    const SmallBox = styled('span')({
        backgroundColor: colors.white,
        color: colors.grey0,
        padding: major(1),
        borderRadius: '4px 4px 4px 0px',
        ...typography('smallBold'),
    });

    return (
        <li>
            <Dropdown
                content={<DropdownContent>Box shadow value is copied to the clipboard</DropdownContent>}
                arrow={false}
            >
                <button
                    type="button"
                    onClick={() => copyToClipboard(value)}
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        width: '100%',
                        height: major(28),
                        padding: major(1),
                        backgroundColor: colors.white,
                        borderRadius: '24px 24px 24px 0px',
                        boxShadow: value,
                    }}
                >
                    <SmallBox>{name}</SmallBox>
                </button>
            </Dropdown>
        </li>
    );
};

export default Shadows;
