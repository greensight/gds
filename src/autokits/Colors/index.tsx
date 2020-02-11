import * as React from 'react';
import { useRef } from 'react';
import Layout from '../../components/Layout';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import Dropdown from '../../helpers/Dropdown';
import typography from '../../helpers/customTypography';
import copyToClipboard from '../../helpers/copyToClipboard';
import IColors from './Colors';

const Colors: React.FC<IColors> = () => {
    const theme = useTheme();
    const { colors } = theme;

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

const Color = ({ name, value }) => {
    const theme = useTheme();
    const { colors } = theme;
    const buttonRef = useRef();

    const markCss = {
        backgroundColor: colors.white,
        color: colors.grey0,
        padding: scale(1),
        borderRadius: '4px 4px 4px 0px',
        ...typography('smallBold'),
    };

    return (
        <Dropdown content="Variable name is copied to the clipboard">
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
        </Dropdown>
    );
};

export default Colors;
