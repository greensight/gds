import React from 'react';
import useTheme from '../../scripts/useTheme';
import isObject from '../../scripts/isObject';
import deepMerge from '../../scripts/deepMerge';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import DropdownContent from '../helpers/DropdownContent';
import typography from '../../scripts/customTypography';
import major from '../../scripts/major';
import Layout from '../Layout';

const Icons = ({ headingLevel = 2 }) => {
    const iconsReq = require.context('!!@svgr/webpack!@icons');
    const icons = iconsReq.keys().reduce((acc, name) => {
        const formattedName = name.match(/\.\/(.+)\.svg$/)[1];
        const nameParts = formattedName.split('/');
        const obj = nameParts.reduceRight((acc, part, index) => {
            const value = index === nameParts.length - 1 ? iconsReq(name).default : acc;
            return { [part]: value };
        }, {});
        return deepMerge(acc, obj);
    }, {});

    function mapIcons(icons, level) {
        const simpleItems = Object.entries(icons).filter(([, value]) => !isObject(value));
        const complexItems = Object.entries(icons).filter(([, value]) => isObject(value));
        const Heading = `h${level}`;
        level = complexItems.length ? level + 1 : headingLevel;

        return (
            <>
                {!!simpleItems.length && (
                    <Layout auto={major(18)} gap={major(2)}>
                        {simpleItems.map(([name, value]) => (
                            <Layout.Item key={name}>
                                <Icon name={name} Icon={value} />
                            </Layout.Item>
                        ))}
                    </Layout>
                )}
                {!!complexItems.length &&
                    complexItems.map(([name, value]) => (
                        <React.Fragment key={name}>
                            <Heading css={{ margin: `${major(2)}px 0` }}>{name}</Heading>
                            {mapIcons(value, level)}
                        </React.Fragment>
                    ))}
            </>
        );
    }

    return mapIcons(icons, headingLevel);
};

const Icon = ({ name, Icon }) => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <Dropdown content={<DropdownContent>Icon name is copied to the clipboard</DropdownContent>} arrow={false}>
            <button
                type="button"
                css={{
                    width: '100%',
                    height: '100%',
                    padding: major(2),
                    border: `2px solid ${colors.grey70}`,
                    borderRadius: 4,
                    ...typography('bodyBold'),
                    textAlign: 'center',
                    transition: 'border-color ease 300ms',
                    ':hover, :focus': {
                        borderColor: colors.grey0,
                    },
                    ':focus': {
                        outline: 'none',
                    },
                }}
                onClick={() => copyToClipboard(name)}
            >
                <Icon css={{ marginBottom: major(1) }} />
                <div>{name}</div>
            </button>
        </Dropdown>
    );
};

export default Icons;
