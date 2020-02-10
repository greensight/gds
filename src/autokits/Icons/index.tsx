import * as React from 'react';
import { useRef } from 'react';
import Layout from '../../components/Layout';
import scale from '../../utils/scale';
import baseTheme from '../../utils/baseTheme';
import Dropdown from '../../helpers/Dropdown';
import typography from '../../helpers/customTypography';
import deepMerge from '../../helpers/deepMerge';
import copyToClipboard from '../../helpers/copyToClipboard';
import IIcons from './Icons';

const Icons: React.FC<IIcons> = ({ headingLevel = 2 }) => {
    console.log(process.env.ICONS_DIR);
    const iconsReq = require.context(`!!@svgr/webpack!${process.env.ICONS_DIR}`);
    const icons = iconsReq.keys().reduce((acc, name) => {
        const matchRes = name.match(/\.\/(.+)\.svg$/);
        const fullPath = `images/icons/${matchRes[0].slice(1)}`;
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
    const { colors } = baseTheme;

    const buttonRef = useRef();

    return (
        <Dropdown content="Path to icon is copied to the clipboard">
            <button
                ref={buttonRef}
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
                    ':hover, :focus.focus-visible': {
                        borderColor: colors.grey0,
                        outline: 'none',
                    },
                }}
                onClick={() => copyToClipboard(path, buttonRef)}
            >
                <Component css={{ marginBottom: scale(1) }} />
                <div>{name}</div>
            </button>
        </Dropdown>
    );
};

export default Icons;
