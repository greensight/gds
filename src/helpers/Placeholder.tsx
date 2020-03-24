import React from 'react';
import scale from '@utils/scale';

interface PlaceholderProps extends React.HTMLProps<HTMLDivElement> {
    /** Placeholder content. */
    children: React.ReactNode;
    /** Background color. */
    bg: string;
}

/**
 * Helper component for visually show content blocks.
 */
const Placeholder = ({ children, bg, ...props }: PlaceholderProps) => (
    <div
        css={theme => ({
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

export default Placeholder;
