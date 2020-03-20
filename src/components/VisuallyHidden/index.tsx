import React from 'react';

export interface VisuallyHiddenProps {
    /** Hidden content */
    children: React.ReactNode;
}

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
    return (
        <div
            css={{
                position: 'absolute',
                width: 1,
                height: 1,
                padding: 0,
                border: 'none',
                overflow: 'hidden',
                clip: 'rect(1px, 1px, 1px, 1px)',
                whiteSpace: 'nowrap',
            }}
        >
            {children}
        </div>
    );
};

export default VisuallyHidden;
