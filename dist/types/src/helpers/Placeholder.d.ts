import React from 'react';
interface PlaceholderProps extends React.HTMLProps<HTMLDivElement> {
    /** Placeholder content. */
    children: React.ReactNode;
    /** Background color. */
    bg: string;
}
/**
 * Helper component for visually show content blocks.
 */
declare const Placeholder: ({ children, bg, ...props }: PlaceholderProps) => JSX.Element;
export default Placeholder;
