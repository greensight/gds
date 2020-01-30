import React, { useRef } from 'react';
import useTheme from '../../scripts/useTheme';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import typography from '../../scripts/customTypography';
import scale from '../../scripts/scale';

const Shadows = () => {
    const theme = useTheme();
    const { shadows } = theme;

    return (
        <ul
            css={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${scale(20)}px, 1fr))`,
                gridGap: scale(8),
            }}
        >
            {Object.keys(shadows).map(name => (
                <Shadow key={name} name={name} value={shadows[name]} />
            ))}
        </ul>
    );
};

const Shadow = ({ name, value }) => {
    const theme = useTheme();
    const { colors } = theme;

    const buttonRef = useRef();

    return (
        <li>
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
        </li>
    );
};

export default Shadows;
