import React from 'react';

const NAMES = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
// TODO NAMES повторяются в нескольких местах
const Container = ({ children, ...props }) => {
    const padding = ({ layout }) =>
        Object.entries(layout.padding).reduce((acc, [bp, bpValue]) => {
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
            css={theme => ({
                maxWidth: theme.app.layout.container,
                margin: '0 auto',
                ...padding(theme.app),
            })}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
