import React from 'react';
import deepmerge from 'deepmerge';
import Icon from './Icon';
import Layout from '@components/Layout';
import scale from '@utils/scale';
import typography from '@helpers/typography';

export interface IconsAutokitProps {
    /** Starting heading level */
    headingLevel?: number;
}

export const IconsAutokit = ({ headingLevel = 2 }: IconsAutokitProps) => {
    const iconsReq = require.context(`!!@svgr/webpack!${process.env.ICONS_DIR}`);
    const icons = iconsReq.keys().reduce((acc, name) => {
        const matchRes = name.match(/\.\/(.+)\.svg$/);
        const fullPath = `images/icons${matchRes?.[0].slice(1)}`;
        const formattedName = matchRes?.[1];
        const nameParts = formattedName?.split('/');

        const obj = nameParts?.reduceRight((acc, part, index) => {
            const value =
                index === nameParts?.length - 1
                    ? {
                          Component: iconsReq(name).default,
                          path: fullPath,
                      }
                    : acc;
            return { [part]: value };
        }, {});

        return deepmerge(acc, obj || {});
    }, {});

    function mapIcons(icons: any, level: number) {
        const simpleItems = Object.entries(icons).filter(([, value]: [any, any]) => value.Component);
        const complexItems = Object.entries(icons).filter(([, value]: [any, any]) => !value.Component);

        const Heading: any = `h${level}`;

        return (
            <>
                {!!simpleItems.length && (
                    <Layout auto={scale(18)} gap={scale(2)} css={{ marginBottom: scale(2) }}>
                        {simpleItems.map(([name, value]: [any, any]) => (
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

    return <div css={{ ...typography('body'), paddingTop: scale(2) }}>{mapIcons(icons, headingLevel)}</div>;
};

export default IconsAutokit;
