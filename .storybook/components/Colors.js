import React from 'react';
import { useTheme } from 'emotion-theming';
import Color from './Color';

const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <div>
            <h2 css={{ marginTop: theme.space[2] }}>Semantic Colors</h2>
            {Object.keys(colors).map(groupName => (
                <div>
                    <h3
                        css={{
                            fontSize: 24,
                            fontWeight: 700,
                            marginBottom: theme.space[2],
                            marginTop: theme.space[2],
                        }}
                    >
                        {groupName}
                    </h3>
                    <ul
                        css={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gridGap: theme.space[8],
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
