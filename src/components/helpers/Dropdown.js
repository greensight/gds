import * as React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

export const Dropdown = ({
    children,
    content,
    theme = 'dropdown',
    arrow = true,
    ignoreAttributes = true,
    interactive = true,
    trigger = 'click',
    aria = null,
    appendTo = 'parent',
    ...props
}) => {
    const handleMount = (...args) => {
        const [instance] = args;
        instance.reference.setAttribute('aria-expanded', 'true');
        if (props.onMount) props.onMount(...args);
    };

    const handleHide = (...args) => {
        const [instance] = args;
        instance.reference.setAttribute('aria-expanded', 'false');
        if (props.onHide) props.onHide(...args);
    };

    const handleTrigger = (...args) => {
        const [instance, event] = args;
        if (event.type === 'focus') {
            instance.set({ delay: 0 });
        }
        if (props.onTrigger) props.onTrigger(...args);
    };

    return (
        <Tippy
            className="dropdown"
            content={content}
            theme={theme}
            arrow={arrow}
            ignoreAttributes={ignoreAttributes}
            interactive={interactive}
            trigger={trigger}
            aria={aria}
            appendTo={appendTo}
            {...props}
            onMount={handleMount}
            onHide={handleHide}
            onTrigger={handleTrigger}
        >
            {children}
        </Tippy>
    );
};

export default Dropdown;
