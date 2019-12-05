import React from 'react';
import { useTheme } from 'emotion-theming';

const ColorsPalette = ({ name }) => {
    const theme = useTheme();
    const palette = theme.colors[name];

    return (
        <div
            css={{
                width: theme.step * 40,
            }}
        >
            <div
                css={{
                    textAlign: 'center',
                    fontSize: 24,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: theme.space[2],
                }}
            >
                {name}
            </div>
            <ul>
                {palette.map((color, index) => (
                    <li
                        key={color}
                        css={{
                            overflow: 'hidden',
                            transition: `margin-right ease ${theme.time}, border-radius ease ${theme.time}`,
                            ':first-child': {
                                borderRadius: '8px 8px 0 0',
                            },
                            ':last-child': {
                                borderRadius: '0 0 8px 8px',
                            },
                            ':hover': {
                                marginRight: -1 * theme.space[2],
                                borderRadius: '0 8px 8px 0',
                            },
                        }}
                    >
                        <button
                            type="button"
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                padding: theme.space[2],
                                backgroundColor: color,
                            }}
                        >
                            <span
                                css={{
                                    backgroundColor: theme.colors.white,
                                    color: theme.colors.black,
                                    padding: theme.space[1],
                                    borderRadius: 4,
                                }}
                            >
                                {index}
                            </span>
                            <span
                                css={{
                                    backgroundColor: theme.colors.white,
                                    color: theme.colors.black,
                                    padding: theme.space[1],
                                    borderRadius: 4,
                                }}
                            >
                                {color}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColorsPalette;
