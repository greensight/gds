import React from 'react';
import { useTheme } from 'emotion-theming';
import copyToClipboard from '../../scripts/copyToClipboard';

const Palette = ({ name }) => {
    const theme = useTheme();
    const { palettes } = theme;

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
                </li>
            ))}
        </ul>
    );
};

export default Palette;
