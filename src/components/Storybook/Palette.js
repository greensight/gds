import React from 'react';
import useTheme from '../../scripts/useTheme';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import CheckIcon from '../../images/check.svg';

const Palette = ({ name }) => {
    const theme = useTheme();
    const { palettes, colors } = theme;

    const DropdownContent = (
        <>
            <CheckIcon css={{ fill: colors.function.success, marginRight: 8, verticalAlign: 'middle' }} />
            Hex code is copied to clipboard
        </>
    );

    return (
        <ul>
            {palettes[name].map((color, index) => (
                <li
                    key={color}
                    css={{
                        transition: 'margin-right ease 300ms',
                        ':hover': {
                            marginRight: -16,
                        },
                    }}
                >
                    <Dropdown content={DropdownContent} arrow={false}>
                        <button
                            type="button"
                            onClick={() => copyToClipboard(color)}
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                padding: '16px 24px',
                                backgroundColor: color,
                            }}
                        >
                            <span
                                css={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    padding: '4px 8px',
                                    borderRadius: 4,
                                    fontSize: 18,
                                    lineHeight: 1.36,
                                }}
                            >
                                {index}
                            </span>
                            <span
                                css={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    padding: '4px 8px',
                                    borderRadius: 4,
                                    fontSize: 18,
                                    lineHeight: 1.36,
                                }}
                            >
                                {color}
                            </span>
                        </button>
                    </Dropdown>
                </li>
            ))}
        </ul>
    );
};

export default Palette;
