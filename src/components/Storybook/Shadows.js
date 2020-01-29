import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../../scripts/useTheme';
import DropdownContent from '../helpers/DropdownContent';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import typography from '../../scripts/customTypography';
import scale from '../../scripts/scale';

const Shadows = () => {
    const theme = useTheme();
    const { shadows } = theme;

    return (
        <ul
            css={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${scale(20)}px, 1fr))`,
                gridGap: scale(8),
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
        padding: scale(1),
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
                        height: scale(28),
                        padding: scale(1),
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
