import React from 'react';
import { useTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import CheckIcon from '../../images/check.svg';

const Color = ({ name, value }) => {
    const theme = useTheme().app;
    const { colors } = theme;

    const DropdownContent = (
        <>
            <CheckIcon css={{ fill: colors.function.success, marginRight: 8, verticalAlign: 'middle' }} />
            Hex code is copied to clipboard
        </>
    );

    const SmallBox = styled('span')({
        backgroundColor: 'white',
        color: 'black',
        padding: 8,
        borderRadius: '4px 4px 4px 0px',
        fontSize: 12,
        lineHeight: 1.36,
    });

    return (
        <li>
            <Dropdown content={DropdownContent} arrow={false}>
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

export default Color;
