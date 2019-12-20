import React from 'react';
import useTheme from '../../scripts/useTheme';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import DropdownContent from '../helpers/DropdownContent';

const Palettes = () => {
    const theme = useTheme();
    const { palettes } = theme;

    return (
        <div>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: 32,
                }}
            >
                {Object.keys(palettes)
                    .filter(name => Array.isArray(palettes[name]))
                    .map(name => (
                        <div key={name}>
                            <div
                                css={{
                                    textAlign: 'center',
                                    fontSize: 24,
                                    fontWeight: 700,
                                    marginBottom: 16,
                                    marginTop: 16,
                                }}
                            >
                                {name}
                            </div>
                            <Palette name={name} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

const Palette = ({ name }) => {
    const theme = useTheme();
    const { palettes, colors } = theme;

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
                    <Dropdown
                        content={<DropdownContent>Hex code is copied to the clipboard</DropdownContent>}
                        arrow={false}
                    >
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
                                    backgroundColor: colors.bg.default,
                                    color: colors.text.default,
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
                                    backgroundColor: colors.bg.default,
                                    color: colors.text.default,
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

export default Palettes;
