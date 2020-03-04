import * as React from 'react';
import { useRef } from 'react';
import Layout from '@components/Layout';
import useTheme from '@utils/useTheme';
import scale from '@utils/scale';
import baseTheme from '@utils/baseTheme';
import Dropdown from '@helpers/Dropdown';
import typography from '@helpers/customTypography';
import copyToClipboard from '@helpers/copyToClipboard';
import IShadows from './Shadows';

const Shadows: React.FC<IShadows> = () => {
    const theme = useTheme();
    const { shadows } = theme;

    if (!shadows)
        return (
            <div css={typography('body')}>
                <span role="img" aria-label="Error">
                    ⛔️
                </span>{' '}
                Shadows are not defined. Use tokens or add <strong>shadows</strong> property in theme settings manually
            </div>
        );

    return (
        <Layout auto={scale(20)} gap={scale(8)}>
            {Object.keys(shadows).map(name => (
                <Layout.Item key={name}>
                    <Shadow name={name} value={shadows[name]} />
                </Layout.Item>
            ))}
        </Layout>
    );
};

const Shadow = ({ name, value }) => {
    const { colors } = baseTheme;
    const buttonRef = useRef();

    return (
        <Dropdown content="Variable name is copied to the clipboard">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => copyToClipboard(`shadows.${name}`, buttonRef)}
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: scale(28),
                    padding: scale(1),
                    backgroundColor: colors.white,
                    borderRadius: '24px 24px 24px 0px',
                    boxShadow: value,
                    transition: 'box-shadow ease 300ms',
                    ':focus.focus-visible': {
                        outline: 'none',
                        boxShadow: `0 0 0 2px ${colors.grey0}`,
                    },
                }}
            >
                <span
                    css={{
                        backgroundColor: colors.white,
                        color: colors.grey0,
                        padding: scale(1),
                        borderRadius: '4px 4px 4px 0px',
                        ...typography('smallBold'),
                    }}
                >
                    {name}
                </span>
            </button>
        </Dropdown>
    );
};

export default Shadows;
