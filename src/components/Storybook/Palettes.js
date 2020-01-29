import React from 'react';
import useTheme from '../../scripts/useTheme';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import DropdownContent from '../helpers/DropdownContent';
import scale from '../../scripts/scale';
import typography from '../../scripts/customTypography';

const Palettes = () => {
    const theme = useTheme();
    const { palettes } = theme;

    return (
        <div>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: scale(4),
                }}
            >
                {Object.keys(palettes)
                    .filter(name => Array.isArray(palettes[name]))
                    .map(name => (
                        <div key={name}>
                            <div
                                css={{
                                    textAlign: 'center',
                                    ...typography('headline'),
                                    marginBottom: scale(2),
                                    marginTop: scale(2),
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
                            marginRight: -scale(2),
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
                                padding: `${scale(2)}px ${scale(3)}px`,
                                backgroundColor: color,
                            }}
                        >
                            <span
                                css={{
                                    backgroundColor: colors.white,
                                    color: colors.grey0,
                                    padding: `${scale(1, true)}px ${scale(1)}px`,
                                    borderRadius: 4,
                                    ...typography('subheading'),
                                }}
                            >
                                {index}
                            </span>
                            <span
                                css={{
                                    backgroundColor: colors.white,
                                    color: colors.grey0,
                                    padding: `${scale(1, true)}px ${scale(1)}px`,
                                    borderRadius: 4,
                                    ...typography('subheading'),
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
