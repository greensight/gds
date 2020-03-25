import React, { useRef } from 'react';
import baseTheme from '@utils/baseTheme';
import scale from '@utils/scale';
import Tooltip from '@helpers/Tooltip';
import typography from '@helpers/typography';
import copyToClipboard from '@helpers/copyToClipboard';

export interface ColorProps {
    /** Color hex value. */
    color: string;
    /** Color index. */
    index: number;
}

export const Color = ({ color, index }: ColorProps) => {
    const { colors } = baseTheme;
    const buttonRef = useRef<HTMLButtonElement>(null);

    const markCss = {
        height: scale(4),
        padding: `${scale(1, true)}px ${scale(1)}px`,
        borderRadius: 4,
        backgroundColor: colors.white,
        color: colors.grey0,
        ...typography('subheading'),
    };

    return (
        <Tooltip content="Hex code is copied to the clipboard">
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
                <span css={markCss}>{index}</span>
                <span css={markCss}>{color}</span>
            </button>
        </Tooltip>
    );
};

export default Color;
