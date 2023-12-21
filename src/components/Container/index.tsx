import React, { useMemo } from 'react';

import { useCSSProperty } from '../../helpers/useCSSProperty';
import { baseTheme } from '../../utils/baseTheme';
import { useTheme } from '../../utils/useTheme';

export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    /** Container content. */
    children: React.ReactNode;
}

/**
 * Component for creating main page container with `layout` theme parameters. Uses `maxWidth`, `padding`,`marginLeft`, `marginRight`.
 */
export const Container = ({ children, css, ...props }: ContainerProps) => {
    const { layout } = useTheme();
    const layoutTheme = layout || baseTheme.layout;

    const maxWidthCSS = useCSSProperty({ name: 'maxWidth', props: { value: layoutTheme.container } });
    const paddingCSS = useCSSProperty({
        name: 'padding',
        props: { value: layoutTheme.padding },
        transform: ({ value }) => `0 ${value}px`,
    });

    const marginLeftCSS = useCSSProperty({ name: 'marginLeft', props: { value: layoutTheme.marginLeft } });
    const marginRightCSS = useCSSProperty({ name: 'marginRight', props: { value: layoutTheme.marginRight } });

    const styles = useMemo(
        () => [maxWidthCSS, paddingCSS, marginLeftCSS, marginRightCSS, css],
        [css, marginLeftCSS, marginRightCSS, maxWidthCSS, paddingCSS],
    );

    return (
        <div css={styles} {...props}>
            {children}
        </div>
    );
};
