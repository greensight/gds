import React from 'react';
import { useTheme } from 'emotion-theming';
import Palette from './Palette';

const Palettes = () => {
    const theme = useTheme();
    const { palettes } = theme;

    return (
        <div>
            <h2
                css={{
                    marginBottom: theme.space[2],
                    marginTop: theme.space[2],
                }}
            >
                Color Palettes
            </h2>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: theme.space[4],
                }}
            >
                {Object.keys(palettes).map(name => (
                    <div key={name}>
                        <h3
                            css={{
                                textAlign: 'center',
                                fontSize: 24,
                                fontWeight: 700,
                                marginBottom: theme.space[2],
                                marginTop: theme.space[2],
                            }}
                        >
                            {name}
                        </h3>
                        <Palette name={name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Palettes;
