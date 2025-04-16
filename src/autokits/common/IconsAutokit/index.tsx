import deepmerge from 'deepmerge';
import React, { ReactNode } from 'react';

import { Icon, IIconProperty } from './Icon';
import styles from './styles.module.scss';
import { UseBuilderMethodsType } from '../../../types/autokits/useBuilderMethods';

interface IIcons {
    [key: string]: (IIconProperty & { Component: React.ReactNode; path: string }) | IIcons;
}

interface IIconGeneralProperty extends Partial<IIconProperty> {
    path: string;
    visible?: boolean;
}
export interface IconsAutokitProps {
    /** Starting heading level. */
    headingLevel?: number;
    /** builder methods hook */
    useBuilderMethods: UseBuilderMethodsType;
    /** exception by path */
    exceptionByPaths?: string[];
    /** icon properties */
    iconProperties?: IIconGeneralProperty[];
    /** properties for all icons */
    propertiesForAllIcons?: IIconProperty;
}

/**
 * Autokit for icons assets from `@icons` directory.
 */
export const IconsAutokit = ({
    useBuilderMethods,
    exceptionByPaths = [],
    iconProperties = [],
    propertiesForAllIcons,
    headingLevel = 2,
}: IconsAutokitProps) => {
    const { getIconsReq, getIconsReqKeys, getIconComponent } = useBuilderMethods();
    const iconsReq = getIconsReq();
    const iconKeys = getIconsReqKeys(iconsReq);

    const icons = iconKeys.reduce<IIcons>((acc, name) => {
        const matchRes = name.match(/\.\/(.+)\.svg$/);
        const fullPath = matchRes ? `${matchRes?.[0].slice(1)}` : name.replace('/src', '');

        const { visible, ...iconProperty } = iconProperties.find(
            (p) => p.path === fullPath.slice(0, p.path.length),
        ) || {
            visible: true,
        };

        if (!visible) return acc;

        if (exceptionByPaths.findIndex((p) => fullPath.slice(0, p.length) === p) !== -1) return acc;

        const nameParts = fullPath?.slice(1).split('/');
        const properties = (Object.keys(iconProperty).length ? iconProperty : propertiesForAllIcons) || {};

        const obj = nameParts?.reduceRight((acc, part, index) => {
            const value =
                index === nameParts?.length - 1
                    ? {
                          Component: getIconComponent(iconsReq, name),
                          path: fullPath,
                          ...properties,
                      }
                    : acc;
            return { [part]: value };
        }, {});

        return deepmerge(acc, obj || {});
    }, {});

    function mapIcons(icons: IIcons, level: number) {
        const simpleItems = Object.entries(icons).filter(([, value]: [any, any]) => value.Component);
        const complexItems = Object.entries(icons).filter(([, value]: [any, any]) => !value.Component);

        const Heading: any = `h${level}`;

        return (
            <>
                {!!simpleItems.length && (
                    <div className={styles.iconsAutokit_layout}>
                        {simpleItems.map(([name, value]: [any, any]) => (
                            <div key={name}>
                                <Icon name={name} {...value} />
                            </div>
                        ))}
                    </div>
                )}
                {!!complexItems.length &&
                    complexItems.map(([name, value]) => (
                        <React.Fragment key={name}>
                            <Heading className={styles.iconsAutokit_title}>{name}</Heading>
                            {mapIcons(value as IIcons, level + 1)}
                        </React.Fragment>
                    ))}
            </>
        );
    }

    return <div className={styles.iconsAutokit}>{mapIcons(icons, headingLevel)}</div>;
};
