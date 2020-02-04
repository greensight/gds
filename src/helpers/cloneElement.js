import { jsx } from '@emotion/core';

const cloneElement = (element, props) =>
    jsx(element.type, {
        key: element.key,
        ref: element.ref,
        ...element.props,
        ...props,
    });

export default cloneElement;
