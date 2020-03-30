import React from 'react';
export interface VisuallyHiddenProps {
    /** Hidden content. */
    children: React.ReactNode;
}
/**
 * Component to wrap components to make them visually hidden. These components still will be available for assistive technologies.
 */
declare const VisuallyHidden: ({ children }: VisuallyHiddenProps) => JSX.Element;
export default VisuallyHidden;
