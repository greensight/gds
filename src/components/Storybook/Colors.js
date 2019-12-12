import React from 'react';
import { useTheme } from 'emotion-theming';
import Color from './Color';

const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <div>
            {Object.keys(colors).map(groupName => (
                <div key={groupName}>
                    <div
                        css={{
                            fontSize: 24,
                            fontWeight: 700,
                            marginBottom: 16,
                            marginTop: 16,
                        }}
                    >
                        {groupName}
                    </div>
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
