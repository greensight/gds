import React from 'react';
import { useTheme } from 'emotion-theming';
import Palette from './Palette';

const Palettes = () => {
    const theme = useTheme().app;
    const { palettes } = theme;
    console.log(theme);
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

export default Palettes;
