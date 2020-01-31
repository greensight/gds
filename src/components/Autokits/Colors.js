import React, { useRef } from 'react';
import useTheme from '../../scripts/useTheme';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import typography from '../../scripts/customTypography';
import scale from '../../scripts/scale';

const Colors = () => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <ul
            css={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${scale(20)}px, 1fr))`,
                gridGap: scale(8),
            }}
        >
            {Object.keys(colors).map(name => (
                <Color key={name} name={name} value={colors[name]} />
            ))}
        </ul>
    );
};

const Color = ({ name, value }) => {
    const theme = useTheme();
    const { colors } = theme;

    const buttonRef = useRef();

    const boxCss = {
        backgroundColor: colors.white,
        color: colors.grey0,
        padding: scale(1),
        borderRadius: '4px 4px 4px 0px',
        ...typography('smallBold'),
    };

    return (
        <li>
            <Dropdown content="Variable name is copied to the clipboard">
                <button
                    ref={buttonRef}
                    type="button"
                    onClick={() => copyToClipboard(`colors.${name}`, buttonRef)}
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
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
                    <span css={{ ...boxCss, marginBottom: scale(1) }}>{value}</span>
                    <span css={boxCss}>{name}</span>
                </button>
            </Dropdown>
        </li>
    );
};

export default Colors;
