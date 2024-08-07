import deepmerge from 'deepmerge';
import React, { ReactNode } from 'react';

import { typography } from '../../../helpers/emotion/typography';
import { scale } from '../../../utils/common/scale';
import { Icon } from './Icon';
import styles from './styles.module.scss';
import { UseBuilderMethodsType } from '../../../types/autokits/useBuilderMethods';
export interface IconsAutokitProps {
    /** Starting heading level. */
    headingLevel?: number;
    /** builder methods hook */
    useBuilderMethods: UseBuilderMethodsType;
}

/**
 * Autokit for icons assets from `@icons` directory.
 */
export const IconsAutokit = ({ useBuilderMethods, headingLevel = 2 }: IconsAutokitProps) => {
    const { getIconsReq, getIconsReqKeys, getIconComponent } = useBuilderMethods();
    const iconsReq = getIconsReq();
    const iconKeys = getIconsReqKeys(iconsReq);

    const icons = iconKeys.reduce((acc, name) => {
        const matchRes = name.match(/\.\/(.+)\.svg$/);
        const fullPath = matchRes ? `${matchRes?.[0].slice(1)}` : name.replace('/src', '');

        const nameParts = fullPath?.slice(1).split('/');

        const obj = nameParts?.reduceRight((acc, part, index) => {
            const value =
                index === nameParts?.length - 1
                    ? {
                          Component: getIconComponent(iconsReq, name),
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
