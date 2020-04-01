import React, { useRef } from 'react';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import Tooltip from '../../helpers/Tooltip';
import typography from '../../helpers/typography';
import copyToClipboard from '../../helpers/copyToClipboard';
import { SVGRIcon } from '../../types/Utils';

export interface IconProps {
    /** Icon variable name. */
    name: string;
    /** Icon component. */
    Component: SVGRIcon;
    /** Path to icon from icons directory. */
    path: string;
}

const Icon = ({ name, Component, path }: IconProps) => {
    const { colors } = baseTheme;
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <Tooltip content="Path to icon is copied to the clipboard">
            <button
                ref={buttonRef}
                type="button"
                css={{
                    width: '100%',
                    height: '100%',
                    padding: scale(2),
                    border: `2px solid ${colors.grey70}`,
                    borderRadius: 4,
                    ...typography('bodyBold'),
                    textAlign: 'center',
                    color: colors.black,
                    transition: 'border-color ease 300ms',
                    ':hover, :focus.focus-visible': {
                        borderColor: colors.grey0,
                        outline: 'none',
                    },
                }}
                onClick={() => copyToClipboard(path)}
            >
                <Component css={{ marginBottom: scale(1) }} />
                <div>{name}</div>
            </button>
        </Tooltip>
    );
};

export default Icon;
