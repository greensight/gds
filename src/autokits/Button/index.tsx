import React from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import typography from '../../helpers/typography';
import useComponentTheme from '../../helpers/useComponentTheme';
import ButtonTheme from '../../types/Button';
import { SVGRIcon } from '../../types/Helpers';

export interface ButtonAutokitProps {
    /** Placeholder text. */
    text?: string;
    /** Placeholder icon (overrides placeholder from theme). */
    Icon?: SVGRIcon;
}

/**
 * Autokit for `Button` component.
 */
export const ButtonAutokit = ({ text = 'Button', Icon }: ButtonAutokitProps) => {
    const theme = useTheme();
    const { componentTheme } = useComponentTheme('Button');
    const buttonTheme = componentTheme as ButtonTheme;
    const PlaceholderIcon = Icon || theme.global?.placeholder || baseTheme.global?.placeholder;

    return (
        <div>
            {Object.keys(buttonTheme.themes).map((themeName) => (
                <div key={themeName} css={{ marginBottom: scale(4) }}>
                    <div css={{ ...typography('title'), marginBottom: scale(2) }}>{themeName}</div>
                    <Layout
                        cols={{ xxxl: Object.keys(buttonTheme.sizes).length, xxs: 1 }}
                        gap={scale(2)}
                        justify="start"
                        align="end"
                        css={{ marginBottom: scale(2) }}
                    >
                        {Object.keys(buttonTheme.sizes).map((sizeName) => (
                            <Button key={sizeName} theme={themeName} size={sizeName}>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map((sizeName) => (
                            <Button key={sizeName} theme={themeName} size={sizeName} disabled>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map((sizeName) => (
                            <Button key={sizeName} theme={themeName} size={sizeName} Icon={PlaceholderIcon}>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map((sizeName) => (
                            <Button key={sizeName} theme={themeName} size={sizeName} Icon={PlaceholderIcon} iconAfter>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map((sizeName) => (
                            <Button key={sizeName} theme={themeName} size={sizeName} Icon={PlaceholderIcon} hidden>
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map((sizeName) => (
                            <Button key={sizeName} theme={themeName} size={sizeName}>
                                {text}
                                <br />
                                {text}
                            </Button>
                        ))}
                        {Object.keys(buttonTheme.sizes).map((sizeName) => (
                            <Button key={sizeName} theme={themeName} size={sizeName} Icon={PlaceholderIcon}>
                                {text}
                                <br />
                                {text}
                            </Button>
                        ))}
                    </Layout>
                    {Object.keys(buttonTheme.sizes).map((sizeName) => (
                        <Button key={sizeName} theme={themeName} size={sizeName} block css={{ marginBottom: scale(2) }}>
                            {text}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ButtonAutokit;
