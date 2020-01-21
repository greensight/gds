import React from 'react';
import useTheme from '../../src/scripts/useTheme';
import CheckCircle from '../../src/images/icons/tokens/medium/checkCircle.svg';
import CrossCircle from '../../src/images/icons/tokens/medium/crossCircle.svg';

const DoDont = ({ children }) => (
    <div css={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: 32 }}>
        {children}
    </div>
);

const Item = ({ type, children }) => {
    const theme = useTheme();
    const { colors } = theme;
    const color = type === 'do' ? colors.success : colors.error;
    const Icon = type === 'do' ? CheckCircle : CrossCircle;
    const heading = type === 'do' ? 'Do' : "Don't";

    return (
        <div
            css={{
                padding: '16px 32px',
                background: colors.grey90,
                color: colors.grey20,
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
