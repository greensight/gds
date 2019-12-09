import React from 'react';
import { useTheme } from 'emotion-theming';
import copyToClipboard from '../../src/scripts/copyToClipboard';

const Palette = ({ name }) => {
    const theme = useTheme();
    const { palettes } = theme;

    return (
        <ul>
            {palettes[name].map((color, index) => (
                <li
                    key={color}
                    css={{
                        transition: `margin-right ease ${theme.time}`,
                        ':hover': {
                            marginRight: -1 * theme.space[2],
                        },
                    }}
                >
                    <button
                        type="button"
                        onClick={() => copyToClipboard(color)}
                        css={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            padding: `${theme.space[2]}px ${theme.space[3]}px`,
                            backgroundColor: color,
                        }}
                    >
                        <span
                            css={{
                                backgroundColor: 'white',
                                color: 'black',
                                padding: `4px ${theme.space[1]}px`,
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
                                padding: `4px ${theme.space[1]}px`,
                                borderRadius: 4,
                                fontSize: 18,
                                lineHeight: 1.36,
                            }}
                        >
                            {color}
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Palette;
