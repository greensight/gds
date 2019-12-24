import React from 'react';
import useTheme from '../../scripts/useTheme';
import isObject from '../../scripts/isObject';
import deepMerge from '../../scripts/deepMerge';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import DropdownContent from '../helpers/DropdownContent';
import typography from '../../scripts/typography';

const Icons = ({ headingLevel = 2 }) => {
    const iconsReq = require.context(`!!@svgr/webpack!@icons`);
    const icons = iconsReq.keys().reduce((acc, name) => {
        const formattedName = name.match(/\.\/(.+)\.svg$/)[1];
        const nameParts = formattedName.split('/');
        const obj = nameParts.reduceRight((acc, part, index) => {
            const value = index === nameParts.length - 1 ? iconsReq(name).default : acc;
            return { [part]: value };
        }, {});
        return deepMerge(acc, obj);
    }, {});

    let level = headingLevel;

    function mapIcons(icons) {
        const simpleItems = Object.entries(icons).filter(([, value]) => !isObject(value));
        const complexItems = Object.entries(icons).filter(([, value]) => isObject(value));
        const list = simpleItems.map(([name, value]) => <Icon key={name} name={name} Icon={value} />);

        const Heading = `h${level}`;
        level = complexItems.length ? level + 1 : headingLevel;

        return (
            <>
                {list && (
                    <ul
                        css={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(144px, 1fr))',
                            gridGap: 16,
                        }}
                    >
                        {list}
                    </ul>
                )}
                {!!complexItems.length &&
                    complexItems.map(([name, value]) => (
                        <React.Fragment key={name}>
                            <Heading css={{ margin: '16px 0' }}>{name}</Heading>
                            {mapIcons(value, true)}
                        </React.Fragment>
                    ))}
            </>
        );
    }

    return <div>{mapIcons(icons)}</div>;
};

const Icon = ({ name, Icon }) => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <li>
            <Dropdown content={<DropdownContent>Icon name is copied to the clipboard</DropdownContent>} arrow={false}>
                <button
                    type="button"
                    css={{
                        width: '100%',
                        height: '100%',
                        padding: '16px',
                        border: `2px solid ${colors.border.default}`,
                        borderRadius: 4,
                        ...typography(theme, 'bodyBold'),
                        textAlign: 'center',
                        transition: 'border-color ease 300ms',
                        ':hover, :focus': {
                            borderColor: colors.border.inverse,
                        },
                        ':focus': {
                            outline: 'none',
                        },
                    }}
                    onClick={() => copyToClipboard(name)}
                >
                    <Icon css={{ marginBottom: 8 }} />
                    <div>{name}</div>
                </button>
            </Dropdown>
        </li>
    );
};

export default Icons;
