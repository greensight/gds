import React from 'react';
import Radio from '../../components/Radio';
import Layout from '../../components/Layout';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import useComponentTheme from '../../helpers/useComponentTheme';
import { RadioItemTheme } from '../../types/Radio';
import { SVGRIcon } from '../../types/Utils';

export interface RadioAutokitProps {
    /** Placeholder text. */
    text?: string;
    /** Placeholder for custom box and mark (overrides placeholder from theme). */
    Icon?: SVGRIcon;
}

/**
 * Autokit for `Radio` component.
 */
const RadioAutokit = ({ text = 'Option', Icon }: RadioAutokitProps) => {
    const theme = useTheme();
    const { componentTheme } = useComponentTheme('RadioItem');
    const radioItemTheme = componentTheme as RadioItemTheme;
    const PlaceholderIcon = Icon || theme.global?.placeholder || baseTheme.global?.placeholder;

    return (
        <>
            <Layout
                cols={{ xxxl: Object.keys(radioItemTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
            >
                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio key={sizeName} size={sizeName} name={`size-${sizeName}-${index + 1}`} defaultValue="three">
                        <Radio.Item value="first">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="three" disabled>{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}

                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`label-pos-${sizeName}-${index + 1}`}
                        labelRight={false}
                        defaultValue="three"
                    >
                        <Radio.Item value="first">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="three" disabled>{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}
            </Layout>
            <Layout cols={{ xxxl: 1, xxs: 1 }} gap={scale(2)} justify="start" align="start">
                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`flow-${sizeName}-${index + 1}`}
                        orientation="horizontal"
                        defaultValue="three"
                    >
                        <Radio.Item value="first">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="three" disabled>{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}
            </Layout>
            <Layout
                cols={{ xxxl: Object.keys(radioItemTheme.sizes).length, xxs: 1 }}
                gap={scale(2)}
                justify="start"
                align="start"
            >
                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`alignment-t-${sizeName}-${index + 1}`}
                        alignment="top"
                        defaultValue="three"
                    >
                        <Radio.Item value="first">{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                        <Radio.Item
                            value="three"
                            disabled
                        >{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                    </Radio>
                ))}
                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`alignment-c-${sizeName}-${index + 1}`}
                        alignment="center"
                        defaultValue="three"
                    >
                        <Radio.Item value="first">{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                        <Radio.Item
                            value="three"
                            disabled
                        >{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                    </Radio>
                ))}
                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`alignment-b-${sizeName}-${index + 1}`}
                        alignment="bottom"
                        defaultValue="three"
                    >
                        <Radio.Item value="first">{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                        <Radio.Item
                            value="three"
                            disabled
                        >{`${text} ${sizeName} with a lot of text for testing box alignment`}</Radio.Item>
                    </Radio>
                ))}

                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`position-t-${sizeName}-${index + 1}`}
                        position="top"
                        defaultValue="three"
                    >
                        <Radio.Item value="first">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="three" disabled>{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}

                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`position-b-${sizeName}-${index + 1}`}
                        position="bottom"
                        defaultValue="three"
                    >
                        <Radio.Item value="first">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="second">{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="three" disabled>{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}

                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`custom-box-${sizeName}-${index + 1}`}
                        defaultValue="three"
                    >
                        <Radio.Item value="first" IconOuter={PlaceholderIcon}>{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="second" IconOuter={PlaceholderIcon}>{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item
                            value="three"
                            IconOuter={PlaceholderIcon}
                            disabled
                        >{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}

                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`custom-mark-${sizeName}-${index + 1}`}
                        defaultValue="three"
                    >
                        <Radio.Item value="first" IconInner={PlaceholderIcon}>{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item value="second" IconInner={PlaceholderIcon}>{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item
                            value="three"
                            IconInner={PlaceholderIcon}
                            disabled
                        >{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}

                {Object.keys(radioItemTheme.sizes).map((sizeName, index) => (
                    <Radio
                        key={sizeName}
                        size={sizeName}
                        name={`custom-radio-${sizeName}-${index + 1}`}
                        defaultValue="three"
                    >
                        <Radio.Item
                            value="first"
                            IconInner={PlaceholderIcon}
                            IconOuter={PlaceholderIcon}
                        >{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item
                            value="second"
                            IconInner={PlaceholderIcon}
                            IconOuter={PlaceholderIcon}
                        >{`${text} ${sizeName}`}</Radio.Item>
                        <Radio.Item
                            value="three"
                            IconInner={PlaceholderIcon}
                            IconOuter={PlaceholderIcon}
                            disabled
                        >{`${text} ${sizeName}`}</Radio.Item>
                    </Radio>
                ))}
            </Layout>
        </>
    );
};

export default RadioAutokit;
