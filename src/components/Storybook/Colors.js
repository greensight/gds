import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../../scripts/useTheme';
import DropdownContent from '../helpers/DropdownContent';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import typography from '../../scripts/customTypography';
import scale from '../../scripts/scale';

// TODO Не нравится, что в цветах нет сортировки - можно ли с этим что-то сделать?

const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <ul
            css={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${scale(20)}px, 1fr))`,
                gridGap: scale(8),
            }}
        >
            {Object.keys(colors).map(name => (
                <Color key={name} name={name} value={colors[name]} />
            ))}
        </ul>
    );
};

const Color = ({ name, value }) => {
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
            <Dropdown content={<DropdownContent>Hex code is copied to the clipboard</DropdownContent>} arrow={false}>
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
                        backgroundColor: value,
                        borderRadius: '24px 24px 24px 0px',
                    }}
                >
                    <SmallBox css={{ marginBottom: scale(1) }}>{value}</SmallBox>
                    <SmallBox>{name}</SmallBox>
                </button>
            </Dropdown>
        </li>
    );
};

export default Colors;
