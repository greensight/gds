import React from 'react';
import useTheme from '../../scripts/useTheme';
import deepMerge from '../../scripts/deepMerge';
import copyToClipboard from '../../scripts/copyToClipboard';
import Dropdown from '../helpers/Dropdown';
import DropdownContent from '../helpers/DropdownContent';
import typography from '../../scripts/customTypography';
import scale from '../../scripts/scale';
import Layout from '../Layout';

const Icons = ({ headingLevel = 2 }) => {
    const iconsReq = require.context('!!@svgr/webpack!@icons');
    const icons = iconsReq.keys().reduce((acc, name) => {
        const matchRes = name.match(/\.\/(.+)\.svg$/);
        const fullPath = `@icons${matchRes[0].slice(1)}`;
        const formattedName = matchRes[1];
        const nameParts = formattedName.split('/');

        const obj = nameParts.reduceRight((acc, part, index) => {
            const value =
                index === nameParts.length - 1
                    ? {
                          Component: iconsReq(name).default,
                          path: fullPath,
                      }
                    : acc;
            return { [part]: value };
        }, {});

        return deepMerge(acc, obj);
    }, {});

    function mapIcons(icons, level) {
        const simpleItems = Object.entries(icons).filter(([, value]) => value.Component);
        const complexItems = Object.entries(icons).filter(([, value]) => !value.Component);

        const Heading = `h${level}`;

        return (
            <>
                {!!simpleItems.length && (
                    <Layout auto={scale(18)} gap={scale(2)} css={{ marginBottom: scale(2) }}>
                        {simpleItems.map(([name, value]) => (
                            <Layout.Item key={name}>
                                <Icon name={name} Component={value.Component} path={value.path} />
                            </Layout.Item>
                        ))}
                    </Layout>
                )}
                {!!complexItems.length &&
                    complexItems.map(([name, value]) => (
                        <React.Fragment key={name}>
                            <Heading css={{ marginBottom: scale(2) }}>{name}</Heading>
                            {mapIcons(value, level + 1)}
                        </React.Fragment>
                    ))}
            </>
        );
    }

    return <div css={{ paddingTop: scale(2) }}>{mapIcons(icons, headingLevel)}</div>;
};

const Icon = ({ name, Component, path }) => {
    const theme = useTheme();
    const { colors } = theme;

    return (
        <Dropdown content={<DropdownContent>Path to icon is copied to the clipboard</DropdownContent>} arrow={false}>
            <button
                type="button"
                css={{
                    width: '100%',
                    height: '100%',
                    padding: scale(2),
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
                onClick={() => copyToClipboard(path)}
            >
                <Component css={{ marginBottom: scale(1) }} />
                <div>{name}</div>
            </button>
        </Dropdown>
    );
};

export default Icons;
