import { jsx } from '@emotion/core';

/**
 * Clone element with merged props.
 */
const cloneElement = (element: any, props: any): JSX.Element =>
    jsx(element.type, {
        key: element.key,
        ref: element.ref,
        ...element.props,
        ...props,
    });

export default cloneElement;
