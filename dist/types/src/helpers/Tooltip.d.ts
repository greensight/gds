/// <reference types="react" />
import { TippyProps } from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
/**
 * Tooltip with success icon. Helper component for show after successful clipboard copy.
 */
declare const Tooltip: ({ children, content, ...props }: TippyProps) => JSX.Element;
export default Tooltip;
