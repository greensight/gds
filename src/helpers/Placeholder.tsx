import React, { FC } from 'react';
import { scale } from '../utils/scale';

interface PlaceholderProps extends React.HTMLProps<HTMLDivElement> {
    /** Placeholder content. */
    children: React.ReactNode;
    /** Background color. */
    bg: string;
}

/**
 * Helper component for visually show content blocks.
 */
export const Placeholder: FC<PlaceholderProps> = ({ children, bg, ...props }) => (
    <div
        css={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: scale(2),
            backgroundColor: bg || theme.colors.grey90,
        })}
        {...props}
    >
        {children}
    </div>
);
