import React, { useRef } from 'react';
import Layout from '@components/Layout';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import Tooltip from '@helpers/Tooltip';
import typography from '@helpers/typography';
import copyToClipboard from '@helpers/copyToClipboard';

export const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    if (!colors)
        return (
            <div css={typography('body')}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Colors are not defined. Use tokens or add <strong>colors</strong> property in theme settings manually
            </div>
        );

    return (
        <Layout auto={scale(20)} gap={scale(8)}>
            {Object.keys(colors).map(name => (
                <Layout.Item key={name}>
                    <Color name={name} value={colors[name]} />
                </Layout.Item>
            ))}
        </Layout>
    );
};

const Color = ({ name, value }: { name: string; value: string }) => {
    const theme = useTheme();
    const { colors } = theme;
    const buttonRef = useRef<HTMLButtonElement>(null);

    const markCss = {
        backgroundColor: colors.white,
        color: colors.grey0,
        padding: scale(1),
        borderRadius: '4px 4px 4px 0px',
        ...typography('smallBold'),
    };

    return (
        <Tooltip content="Variable name is copied to the clipboard">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => copyToClipboard(`colors.${name}`, buttonRef)}
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    width: '100%',
                    height: scale(28),
                    padding: scale(1),
                    backgroundColor: value,
                    borderRadius: '24px 24px 24px 0px',
                    transition: 'box-shadow ease 300ms',
                    ':focus.focus-visible': {
                        outline: 'none',
                        boxShadow: `0 0 0 2px ${colors.grey0}`,
                    },
                }}
            >
                <span css={{ ...markCss, marginBottom: scale(1) }}>{value}</span>
                <span css={markCss}>{name}</span>
            </button>
        </Tooltip>
    );
};

export default Colors;
