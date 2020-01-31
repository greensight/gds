import React, { useRef } from 'react';
import useTheme from '../../scripts/useTheme';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
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
    const { palettes } = theme;

    return (
        <ul>
            {palettes[name].map((color, index) => {
                return <PaletteItem key={color} color={color} index={index} />;
            })}
        </ul>
    );
};

const PaletteItem = ({ color, index }) => {
    const theme = useTheme();
    const { colors } = theme;

    const buttonRef = useRef();

    return (
        <li key={color}>
            <Dropdown content="Hex code is copied to the clipboard">
                <button
                    ref={buttonRef}
                    type="button"
                    onClick={() => copyToClipboard(color, buttonRef)}
                    css={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: `${scale(2)}px ${scale(3)}px`,
                        backgroundColor: color,
                        transition: 'width ease 300ms',
                        ':hover, :focus.focus-visible': {
                            width: 'calc(100% + 16px)',
                            outline: 'none',
                        },
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
    );
};
export default Palettes;
