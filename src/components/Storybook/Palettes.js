import React from 'react';
import useTheme from '../../scripts/useTheme';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import DropdownContent from '../helpers/DropdownContent';
import major from '../../scripts/major';
import typography from '../../scripts/customTypography';
import minor from '../../scripts/minor';

const Palettes = () => {
    const theme = useTheme();
    const { palettes } = theme;

    return (
        <div>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: major(4),
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
                                    marginBottom: major(2),
                                    marginTop: major(2),
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
                            marginRight: -major(2),
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
                                padding: `${major(2)}px ${major(3)}px`,
                                backgroundColor: color,
                            }}
                        >
                            <span
                                css={{
                                    backgroundColor: colors.bg.default,
                                    color: colors.text.default,
                                    padding: `${minor(1)}px ${major(1)}px`,
                                    borderRadius: 4,
                                    ...typography('subheading'),
                                }}
                            >
                                {index}
                            </span>
                            <span
                                css={{
                                    backgroundColor: colors.bg.default,
                                    color: colors.text.default,
                                    padding: `${minor(1)}px ${major(1)}px`,
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
