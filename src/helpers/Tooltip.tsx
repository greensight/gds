import Tippy, { TippyProps } from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import baseTheme from '../utils/baseTheme';
import scale from '../utils/scale';
import CheckCircle from '../icons/tokens/medium/checkCircle.svg';

/**
 * Tooltip with success icon. Helper component for show after successful clipboard copy.
 */
const Tooltip = ({ children, content, ...props }: TippyProps) => {
    const { colors } = baseTheme;

    return (
        <Tippy
            content={
                <>
                    <CheckCircle fill={colors?.success} css={{ marginRight: scale(1), verticalAlign: 'middle' }} />
                    {content}
                </>
            }
            trigger="click"
            arrow={false}
            animation="shift-away"
            onShow={(instance) => {
                setTimeout(() => {
                    instance.hide();
                }, 1000);
            }}
            {...props}
        >
            {children}
        </Tippy>
    );
};

export default Tooltip;
