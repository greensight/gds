import React from 'react';
import useTheme from '../../scripts/useTheme';
import Button from '../Button';
import Layout from '../Layout';
import typography from '../../scripts/typography';
import baseTheme from '../../scripts/baseTheme';
import major from '../../scripts/major';
import PlusIcon from '../../images/icons/plus.svg';

const Colors = ({ text = 'Button', Icon = PlusIcon }) => {
    const theme = useTheme();
    const { button: buttonTheme } = theme;

    return (
        <ul>
            {Object.keys(buttonTheme.themes).map(themeName => (
                <li key={themeName} css={{ marginBottom: major(4) }}>
                    <div css={{ ...typography('title', baseTheme.app), marginBottom: major(2) }}>{themeName}</div>
                    <Layout
                        cols={{ _: Object.keys(buttonTheme.sizes).length, sm: 1 }}
                        gap={major(2)}
                        justify="start"
                        align="end"
                        css={{ marginBottom: major(2) }}
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
                        <Button key={sizeName} theme={themeName} size={sizeName} block css={{ marginBottom: major(2) }}>
                            {text}
                        </Button>
                    ))}
                </li>
            ))}
        </ul>
    );
};

export default Colors;
