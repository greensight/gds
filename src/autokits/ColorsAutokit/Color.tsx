import React, { useRef } from 'react';
import { baseTheme } from '../../utils/baseTheme';
import { scale } from '../../utils/scale';
import { Tooltip } from '../../helpers/Tooltip';
import { typography } from '../../helpers/typography';
import { copyToClipboard } from '../../helpers/copyToClipboard';

export interface ColorProps {
    /** Color variable name. */
    name: string;
    /** Color value. */
    value: string;
}

export const Color = ({ name, value }: ColorProps) => {
    const { colors } = baseTheme;
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
