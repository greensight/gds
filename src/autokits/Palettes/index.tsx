import * as React from 'react';
import { useRef } from 'react';
import Layout from '../../components/Layout';
import useTheme from '../../utils/useTheme';
import scale from '../../utils/scale';
import Dropdown from '../../helpers/Dropdown';
import typography from '../../helpers/customTypography';
import copyToClipboard from '../../helpers/copyToClipboard';
import IPalettes from './Palettes';

const Palettes: React.FC<IPalettes> = () => {
    const theme = useTheme();
    const { palettes } = theme;

    return (
        <Layout auto={scale(30)} gap={scale(8)}>
            {Object.keys(palettes)
                .filter(name => Array.isArray(palettes[name]))
                .map(name => (
                    <Layout.Item key={name}>
                        <div
                            css={{
                                textAlign: 'center',
                                ...typography('headline'),
                                marginBottom: scale(2),
                                marginTop: scale(2),
                            }}
                        >
                            {name}
                        </div>
                        {palettes[name].map((color, index) => (
                            <PaletteColor key={color} color={color} index={index} />
                        ))}
                    </Layout.Item>
                ))}
        </Layout>
    );
};

const PaletteColor = ({ color, index }) => {
    const theme = useTheme();
    const { colors } = theme;
    const buttonRef = useRef();

    return (
        <Dropdown content="Hex code is copied to the clipboard">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => copyToClipboard(color, buttonRef)}
                css={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: `${scale(2)}px ${scale(3)}px`,
                    backgroundColor: color,
                    transition: 'width ease 300ms',
                    ':hover, :focus.focus-visible': {
                        width: 'calc(100% + 16px)',
                        outline: 'none',
                    },
                }}
            >
                <span
                    css={{
                        backgroundColor: colors.white,
                        color: colors.grey0,
                        padding: `${scale(1, true)}px ${scale(1)}px`,
                        borderRadius: 4,
                        ...typography('subheading'),
                    }}
                >
                    {index}
                </span>
                <span
                    css={{
                        backgroundColor: colors.white,
                        color: colors.grey0,
                        padding: `${scale(1, true)}px ${scale(1)}px`,
                        borderRadius: 4,
                        ...typography('subheading'),
                    }}
                >
                    {color}
                </span>
            </button>
        </Dropdown>
    );
};
export default Palettes;
