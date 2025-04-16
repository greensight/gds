import React, { useRef } from 'react';

import { Tooltip } from '../../../helpers/common/Tooltip';
import { copyToClipboard } from '../../../helpers/common/copyToClipboard';
import { typography } from '../../../helpers/emotion/typography';
import { SVGRIcon } from '../../../types/Utils';
import { scale } from '../../../utils/common/scale';
import { useAutokitsTheme } from '../../../autokits';

export interface IIconProperty {
    background: string;
    width: number;
    height: number;
}
export interface IconProps extends Partial<IIconProperty> {
    /** Icon variable name. */
    name: string;
    /** Icon component. */
    Component: SVGRIcon;
    /** Path to icon from icons directory. */
    path: string;
}

export const Icon = ({ name, Component, path, background, width, height }: IconProps) => {
    const { colors } = useAutokitsTheme();
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
                    border: `2px solid ${colors?.grey70}`,
                    borderRadius: 4,
                    ...typography('bodyBold'),
                    textAlign: 'center',
                    color: colors?.black,
                    transition: 'border-color ease 300ms',
                    ':hover, :focus-visible': {
                        borderColor: colors?.grey0,
                        outline: 'none',
                    },
                }}
                onClick={() => copyToClipboard(path)}
            >
                <Component css={{ background, width, height, marginBottom: scale(1) }} />
                <span css={{ display: 'flex' }}>{name}</span>
            </button>
        </Tooltip>
    );
};
