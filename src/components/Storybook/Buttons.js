import React from 'react';
import useTheme from '../../scripts/useTheme';
import Button from '../Button';
import Layout from '../Layout';
import typography from '../../scripts/customTypography';
import baseTheme from '../../scripts/baseTheme';
import scale from '../../scripts/scale';

const Buttons = ({ text = 'Button', Icon }) => {
    const theme = useTheme();
    const buttonTheme = (theme.components && theme.components.Button) || baseTheme.app.components.Button;
    Icon = Icon || theme.placeholder || baseTheme.app.placeholder;

    return (
        <ul>
            {Object.keys(buttonTheme.themes).map(themeName => (
                <li key={themeName} css={{ marginBottom: scale(4) }}>
                    <div css={{ ...typography('title'), marginBottom: scale(2) }}>{themeName}</div>
                    <Layout
                        cols={{ _: Object.keys(buttonTheme.sizes).length, sm: 1 }}
                        gap={scale(2)}
                        justify="start"
                        align="end"
                        css={{ marginBottom: scale(2) }}
                    >
                        {Object.keys(buttonTheme.sizes).map(sizeName => (
                            <Button key={sizeName} theme={themeName} size={sizeName}>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map(sizeName => (
                            <Button key={sizeName} theme={themeName} size={sizeName} disabled>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map(sizeName => (
                            <Button key={sizeName} theme={themeName} size={sizeName} Icon={Icon}>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map(sizeName => (
                            <Button key={sizeName} theme={themeName} size={sizeName} Icon={Icon} iconAfter>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map(sizeName => (
                            <Button key={sizeName} theme={themeName} size={sizeName} Icon={Icon} hidden>
                                {text}
                            </Button>
                        ))}
                    </Layout>
                    {Object.keys(buttonTheme.sizes).map(sizeName => (
                        <Button key={sizeName} theme={themeName} size={sizeName} block css={{ marginBottom: scale(2) }}>
                            {text}
                        </Button>
                    ))}
                </li>
            ))}
        </ul>
    );
};

export default Buttons;
