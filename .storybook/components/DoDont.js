import React from 'react';
import useTheme from '../../src/scripts/useTheme';
import CheckIcon from '../../src/images/icons/check.svg';
import CrossIcon from '../../src/images/icons/cross.svg';

const DoDont = ({ children }) => {
    return (
        <div css={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: 32 }}>
            {children}
        </div>
    );
};

const Item = ({ type, children }) => {
    const theme = useTheme();
    const { colors } = theme;
    const color = type === 'do' ? colors.function.success : colors.function.error;
    const Icon = type === 'do' ? CheckIcon : CrossIcon;
    const heading = type === 'do' ? 'Do' : "Don't";

    return (
        <div
            css={{
                padding: `16px 32px`,
                background: colors.bg.lighter,
                color: colors.bg.dark,
                borderTop: `4px solid ${color}`,
            }}
        >
            <div css={{ marginBottom: 8 }}>
                <Icon css={{ fill: color, marginRight: 8, verticalAlign: 'top' }} />
                <strong>{heading}</strong>
            </div>
            {children}
        </div>
    );
};

const Do = ({ children }) => <Item type="do">{children}</Item>;
const Dont = ({ children }) => <Item type="dont">{children}</Item>;

DoDont.Do = Do;
DoDont.Dont = Dont;

export default DoDont;
