import { CSSObject } from '@emotion/react';
import { HTMLProps, ReactNode } from 'react';
import useCSSProperty from '../../helpers/useCSSProperty';
import useTheme from '../../utils/useTheme';
import baseTheme from '../../utils/baseTheme';

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
    /** Container content. */
    children: ReactNode;
    /** Additional CSS. */
    css?: CSSObject;
}

/**
 * Component for creating main page container with `layout` theme parameters. Uses `maxWidth`, `padding`,`marginLeft`, `marginRight`.
 */
const Container = ({ children, css, ...props }: ContainerProps) => {
    const { layout } = useTheme();
    const layoutTheme = layout || baseTheme.layout;

    return (
        <div
            css={[
                useCSSProperty({ name: 'maxWidth', props: { value: layoutTheme.container } }),
                useCSSProperty({
                    name: 'padding',
                    props: { value: layoutTheme.padding },
                    transform: ({ value }) => `0 ${value}px`,
                }),
                useCSSProperty({ name: 'marginLeft', props: { value: layoutTheme.marginLeft } }),
                useCSSProperty({ name: 'marginRight', props: { value: layoutTheme.marginRight } }),
                css,
            ]}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
