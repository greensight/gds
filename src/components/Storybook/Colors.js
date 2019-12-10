import React from 'react';
import { useTheme } from 'emotion-theming';
import Color from './Color';

const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <div>
            <h2>Semantic Colors</h2>
            {Object.keys(colors).map(groupName => (
                <div key={groupName}>
                    <h3
                        css={{
                            fontSize: 24,
                            fontWeight: 700,
                            marginBottom: 16,
                            marginTop: 16,
                        }}
                    >
                        {groupName}
                    </h3>
                    <ul
                        css={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gridGap: 64,
                        }}
                    >
                        {Object.keys(colors[groupName]).map(colorName => (
                            <Color key={colorName} name={colorName} value={colors[groupName][colorName]} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Colors;
