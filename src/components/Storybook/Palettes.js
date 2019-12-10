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
                    marginBottom: 16,
                    marginTop: 16,
                }}
            >
                Color Palettes
            </h2>
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
                            <h3
                                css={{
                                    textAlign: 'center',
                                    fontSize: 24,
                                    fontWeight: 700,
                                    marginBottom: 16,
                                    marginTop: 16,
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