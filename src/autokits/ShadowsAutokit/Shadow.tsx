import React, { useRef } from 'react';

import { Tooltip } from '../../helpers/Tooltip';
import { copyToClipboard } from '../../helpers/copyToClipboard';
import { typography } from '../../helpers/typography';
import { baseTheme } from '../../utils/baseTheme';
import { scale } from '../../utils/scale';

export interface ShadowProps {
    /** Shadow variable name. */
    name: string;
    /** Shadow value. */
    value: string;
}

export const Shadow = ({ name, value }: ShadowProps) => {
    const { colors } = baseTheme;
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <Tooltip content="Variable name is copied to the clipboard">
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
        </Tooltip>
    );
};
