import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../../scripts/useTheme';
import DropdownContent from '../helpers/DropdownContent';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import typography from '../../scripts/typography';

const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <div>
            {Object.keys(colors).map(groupName => (
                <div key={groupName}>
                    <div
                        css={{
                            fontSize: 24,
                            fontWeight: 700,
                            marginBottom: 16,
                            marginTop: 16,
                        }}
                    >
                        {groupName}
                    </div>
                    <ul
                        css={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gridGap: 64,
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
        padding: 8,
        borderRadius: '4px 4px 4px 0px',
        ...typography(theme, 'smallBold'),
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
                        height: 224,
                        padding: 8,
                        backgroundColor: value,
                        borderRadius: '24px 24px 24px 0px',
                    }}
                >
                    <SmallBox css={{ marginBottom: 8 }}>{value}</SmallBox>
                    <SmallBox>{name}</SmallBox>
                </button>
            </Dropdown>
        </li>
    );
};

export default Colors;
