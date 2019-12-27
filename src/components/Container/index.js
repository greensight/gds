import React from 'react';
import useTheme from '../../scripts/useTheme';

const NAMES = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
// TODO NAMES повторяются в нескольких местах
const Container = ({ children }) => {
    const { layout } = useTheme();

    const padding = Object.entries(layout.padding).reduce((acc, [bp, bpValue]) => {
        const name = NAMES[NAMES.indexOf(bp) + 1];
        return {
            ...acc,
            [`@media (max-width: ${layout.breakpoints[name] - 1}px)`]: {
                padding: `0 ${bpValue}px`,
            },
        };
    }, {});

    return (
        <div
            css={{
                maxWidth: layout.container,
                margin: '0 auto',
                ...padding,
            }}
        >
            {children}
        </div>
    );
};

export default Container;
