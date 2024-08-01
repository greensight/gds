import deepmerge from 'deepmerge';
import React from 'react';

import { typography } from '../../../helpers/emotion/typography';
import { scale } from '../../../utils/common/scale';
import { Icon } from './Icon';
import styles from './styles.module.scss';
export interface IconsAutokitProps {
    /** Starting heading level. */
    headingLevel?: number;
}

/**
 * Autokit for icons assets from `@icons` directory.
 */
export const IconsAutokit = ({ headingLevel = 2 }: IconsAutokitProps) => {
    const iconsReq = require.context(`!!@svgr/webpack!${process.env.ICONS_DIR}`);
    const icons = iconsReq.keys().reduce((acc, name) => {
        const matchRes = name.match(/\.\/(.+)\.svg$/);
        const fullPath = `@icons${matchRes?.[0].slice(1)}`;
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
                    <div className={styles.iconsAutokit_layout}>
                        {simpleItems.map(([name, value]: [any, any]) => (
                            <div key={name}>
                                <Icon name={name} Component={value.Component} path={value.path} />
                            </div>
                        ))}
                    </div>
                )}
                {!!complexItems.length &&
                    complexItems.map(([name, value]) => (
                        <React.Fragment key={name}>
                            <Heading className={styles.iconsAutokit_title}>{name}</Heading>
                            {mapIcons(value, level + 1)}
                        </React.Fragment>
                    ))}
            </>
        );
    }

    return <div css={{ ...typography('body'), paddingTop: scale(2) }}>{mapIcons(icons, headingLevel)}</div>;
};
