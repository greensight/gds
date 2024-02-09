import React, { FC, useMemo } from 'react';

import { useCSSProperty } from '../../helpers/useCSSProperty';
import { baseTheme } from '../../utils/baseTheme';
import { useTheme } from '../../utils/useTheme';

export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    /** Container content. */
    children: React.ReactNode;
}

export const useContainerCSS = () => {
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

    return useMemo(
        () => [maxWidthCSS!, paddingCSS!, marginLeftCSS!, marginRightCSS!],
        [marginLeftCSS, marginRightCSS, maxWidthCSS, paddingCSS],
    );
};

/**
 * Component for creating main page container with `layout` theme parameters. Uses `maxWidth`, `padding`,`marginLeft`, `marginRight`.
 */
export const Container: FC<ContainerProps> = ({ children, css, ...props }) => {
    const themeStyles = useContainerCSS();
    const styles = useMemo(() => [...themeStyles, css], [themeStyles, css]);

    return (
        <div css={styles} {...props}>
            {children}
        </div>
    );
};
