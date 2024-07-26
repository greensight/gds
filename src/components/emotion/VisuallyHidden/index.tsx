import { CSSObject } from '@emotion/react';
import React, { FC } from 'react';

export interface VisuallyHiddenProps {
    /** Hidden content. */
    children: React.ReactNode;
}

const visuallyHiddenCSS: CSSObject = {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    border: 'none',
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)',
    whiteSpace: 'nowrap',
};

/**
 * Component to wrap components to make them visually hidden. These components still will be available for assistive technologies.
 */
export const VisuallyHidden: FC<VisuallyHiddenProps> = ({ children }) => {
    return <div css={visuallyHiddenCSS}>{children}</div>;
};
