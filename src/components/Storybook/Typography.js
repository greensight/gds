import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../../scripts/useTheme';
import typography from '../../scripts/typography';

const Typography = ({ text = 'Demo text 123' }) => {
    const theme = useTheme();

    const MobileMark = styled('span')({
        backgroundColor: theme.colors.bg.lighter,
        color: theme.colors.text.second,
        padding: 4,
        borderRadius: 4,
        marginRight: 8,
        ...typography(theme, 'smallBold'),
    });

    return (
        <div>
            <ul>
                {Object.keys(theme.typography)
                    .filter(name => !['breakpoints', 'fonts'].includes(name))
                    .sort(
                        (a, b) =>
                            parseFloat(theme.typography[b].desktop.fontSize) -
                            parseFloat(theme.typography[a].desktop.fontSize),
                    )
                    .map(name => (
                        <li key={name} css={{ display: 'flex', alignItems: 'flex-end', marginBottom: 24 }}>
                            <div css={{ minWidth: 136, marginRight: 16 }}>
                                {theme.typography[name].mobile && <MobileMark>M</MobileMark>}
                                <span css={{ color: theme.colors.text.second, fontSize: 16 }}>{name}</span>
                            </div>
                            <div
                                css={{
                                    ...typography(theme, name),
                                    color: theme.colors.text.default,
                                }}
                            >
                                {text}
                            </div>
                        </li>
                    ))}
            </ul>
            <MobileMark>M</MobileMark> - &quot;M for mobile&quot;, style changes between breakpoints{' '}
            <strong>{theme.typography.breakpoints[0]}</strong> and <strong>{theme.typography.breakpoints[1]}</strong>
        </div>
    );
};

export default Typography;
