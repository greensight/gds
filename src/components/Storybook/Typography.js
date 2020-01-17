import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../../scripts/useTheme';
import customTypography from '../../scripts/customTypography';
import typography from '../../scripts/typography';
import minor from '../../scripts/minor';
import major from '../../scripts/major';

// TODO Есть проблема с рендером шрифтов на Windows - прогнать

const Typography = ({ text = 'Demo text 123' }) => {
    const theme = useTheme();

    const MobileMark = styled('span')({
        backgroundColor: theme.colors.grey90,
        color: theme.colors.grey20,
        padding: minor(1),
        borderRadius: 4,
        marginRight: major(1),
        ...customTypography('smallBold'),
    });

    return (
        <div>
            <ul>
                {Object.keys(theme.typography)
                    .filter(name => !['breakpoints', 'fonts', 'fluid'].includes(name))
                    .sort(
                        (a, b) =>
                            parseFloat(theme.typography[b].desktop.fontSize) -
                            parseFloat(theme.typography[a].desktop.fontSize),
                    )
                    .map(name => (
                        <li key={name} css={{ display: 'flex', alignItems: 'flex-end', marginBottom: major(3) }}>
                            <div css={{ minWidth: major(17), marginRight: major(2) }}>
                                {theme.typography[name].mobile && <MobileMark>M</MobileMark>}
                                <span css={{ color: theme.colors.grey20, ...customTypography('body') }}>{name}</span>
                            </div>
                            <div
                                css={{
                                    ...typography(name, theme),
                                    color: theme.colors.black,
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
