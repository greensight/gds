import React from 'react';
import ButtonComponent from '@components/Button';
import Layout from '@components/Layout';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import typography from '@helpers/typography';
import VisuallyHidden from '@components/VisuallyHidden';
import Container from '@components/Container';

export interface ButtonAutokitProps {
    /** Placeholder text */
    text?: string;
    /** Placeholder icon (overrides placeholder from theme)
     */
    Icon?: SVGRIcon;
}

export const Button = ({ text = 'Button', Icon }: ButtonAutokitProps) => {
    const theme = useTheme();
    const buttonTheme = theme.components?.Button || baseTheme.components.Button;
    Icon = Icon || theme.placeholder || baseTheme.placeholder;

    return Object.keys(buttonTheme.themes).map(themeName => (
        <div key={themeName} css={{ marginBottom: scale(4) }}>
            <div css={{ ...typography('title'), marginBottom: scale(2) }}>{themeName}</div>
            <Layout
                cols={{ xxxl: Object.keys(buttonTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="end"
                css={{ marginBottom: scale(2) }}
            >
                {Object.keys(buttonTheme.sizes).map(sizeName => (
                    <ButtonComponent key={sizeName} theme={themeName} size={sizeName}>
                        {text}
                    </ButtonComponent>
                ))}
                {Object.keys(buttonTheme.sizes).map(sizeName => (
                    <ButtonComponent key={sizeName} theme={themeName} size={sizeName} disabled>
                        {text}
                    </ButtonComponent>
                ))}
                {Object.keys(buttonTheme.sizes).map(sizeName => (
                    <ButtonComponent key={sizeName} theme={themeName} size={sizeName} Icon={Icon}>
                        {text}
                    </ButtonComponent>
                ))}
                {Object.keys(buttonTheme.sizes).map(sizeName => (
                    <ButtonComponent key={sizeName} theme={themeName} size={sizeName} Icon={Icon} iconAfter>
                        {text}
                    </ButtonComponent>
                ))}
                {Object.keys(buttonTheme.sizes).map(sizeName => (
                    <ButtonComponent key={sizeName} theme={themeName} size={sizeName} Icon={Icon} hidden>
                        {text}
                    </ButtonComponent>
                ))}
                {Object.keys(buttonTheme.sizes).map(sizeName => (
                    <ButtonComponent key={sizeName} theme={themeName} size={sizeName}>
                        {text}
                        <br />
                        {text}
                    </ButtonComponent>
                ))}
                {Object.keys(buttonTheme.sizes).map(sizeName => (
                    <ButtonComponent key={sizeName} theme={themeName} size={sizeName} Icon={Icon}>
                        {text}
                        <br />
                        {text}
                    </ButtonComponent>
                ))}
            </Layout>
            {Object.keys(buttonTheme.sizes).map(sizeName => (
                <ButtonComponent
                    key={sizeName}
                    theme={themeName}
                    size={sizeName}
                    block
                    css={{ marginBottom: scale(2) }}
                >
                    {text}
                </ButtonComponent>
            ))}
        </div>
    ));
};

export default Button;
