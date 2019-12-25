import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../../scripts/useTheme';
import DropdownContent from '../helpers/DropdownContent';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import typography from '../../scripts/customTypography';
import major from '../../scripts/major';

const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <div>
            {Object.keys(colors).map(groupName => (
                <div key={groupName}>
                    <div
                        css={{
                            ...typography('headline'),
                            marginBottom: major(2),
                            marginTop: major(2),
                        }}
                    >
                        {groupName}
                    </div>
                    <ul
                        css={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(auto-fit, minmax(${major(20)}px, 1fr))`,
                            gridGap: major(8),
                        }}
                    >
                        {Object.keys(colors[groupName]).map(colorName => (
                            <Color key={colorName} name={colorName} value={colors[groupName][colorName]} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

const Color = ({ name, value }) => {
    const theme = useTheme();
    const { colors } = theme;

    const SmallBox = styled('span')({
        backgroundColor: colors.bg.default,
        color: colors.text.default,
        padding: major(1),
        borderRadius: '4px 4px 4px 0px',
        ...typography('smallBold'),
    });

    return (
        <li>
            <Dropdown content={<DropdownContent>Hex code is copied to the clipboard</DropdownContent>} arrow={false}>
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
                        backgroundColor: value,
                        borderRadius: '24px 24px 24px 0px',
                    }}
                >
                    <SmallBox css={{ marginBottom: major(1) }}>{value}</SmallBox>
                    <SmallBox>{name}</SmallBox>
                </button>
            </Dropdown>
        </li>
    );
};

export default Colors;
