import React from 'react';
import copyToClipboard from '../../scripts/copyToClipboard';

const Color = ({ name, value }) => {
    return (
        <li>
            <button
                type="button"
                onClick={() => copyToClipboard(value)}
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: 224,
                    padding: 8,
                    backgroundColor: value,
                    borderRadius: '24px 24px 24px 0px',
                }}
            >
                <span
                    css={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: 8,
                        borderRadius: '4px 4px 4px 0px',
                        fontSize: 12,
                        lineHeight: 1.36,
                    }}
                >
                    {name}
                </span>
            </button>
        </li>
    );
};

export default Color;
