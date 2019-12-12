import React from 'react';
import { useTheme } from 'emotion-theming';
import typography from '../../scripts/typography';

const Typography = ({ text = 'Demo text 123' }) => {
    const theme = useTheme().app;

    return (
        <ul>
            {Object.keys(theme.typography)
                .filter(name => name !== 'breakpoints')
                .sort(
                    (a, b) =>
                        parseFloat(theme.typography[b].desktop.fontSize) -
                        parseFloat(theme.typography[a].desktop.fontSize),
                )
                .map(name => (
                    <li key={name} css={{ display: 'flex', alignItems: 'flex-end', marginBottom: 24 }}>
                        <span css={{ minWidth: '120px', color: theme.colors.text.second, fontSize: 16 }}>{name}</span>
                        <span
                            css={{
                                ...typography(theme, name),
                                color: theme.colors.text.default,
                            }}
                        >
                            {text}
                        </span>
                    </li>
                ))}
        </ul>
    );
};

export default Typography;
