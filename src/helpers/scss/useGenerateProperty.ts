import { type CSSProperties, useMemo } from 'react';

import { type Breakpoint, type ValueType } from '../../types/scss/Layout';
import { BREAKPOINTS_NAMES } from '../common/constants';

interface IProp {
    name: string;
    value: Partial<Record<Breakpoint, ValueType>>;
}

const mediaKeys = BREAKPOINTS_NAMES.slice(0, -1) as Breakpoint[];

export interface IUseGenerateProperty {
    props: IProp[];
    styles: Record<string, string>;
    name: string;
}

export const useGenerateProperty = ({ props, styles, name }: IUseGenerateProperty) => {
    const mediaProperties = useMemo(
        () =>
            BREAKPOINTS_NAMES.reduce(
                (acc, key) => {
                    const temp = props.reduce(
                        (propAcc, p) => {
                            const value = p.value?.[key];
                            if (value) {
                                propAcc[p.name] = value;
                            }

                            return propAcc;
                        },
                        {} as Record<string, ValueType>,
                    );

                    if (Object.keys(temp).length) {
                        acc[key] = temp;
                    }
                    return acc;
                },
                {} as Record<Breakpoint, Record<string, ValueType>>,
            ),
        [props],
    );

    const mediaStyles = useMemo(
        () =>
            mediaKeys.reduce<Record<string, boolean>>((acc, key) => {
                // xxxl значения прописаны в базовом стиле, они там есть по умолчанию
                if (key === 'xxxl') return acc;

                const dataValue = mediaProperties[key];
                acc[styles[`${name}__${key}`]] = !!dataValue;
                return acc;
            }, {}),
        [mediaProperties, name, styles],
    );

    const vars = useMemo<CSSProperties>(
        () =>
            (Object.keys(mediaProperties) as (keyof typeof mediaProperties)[]).reduce<Record<string, string>>(
                (acc, breakpoint) => {
                    const properties = mediaProperties[breakpoint];
                    Object.keys(properties).forEach((propertyName) => {
                        const propertyValue = properties[propertyName];
                        const parsedValue =
                            Number.isNaN(Number(propertyValue)) || typeof propertyValue === 'string'
                                ? propertyValue
                                : `${propertyValue}px`;
                        acc[breakpoint === 'xxxl' ? `--${propertyName}` : `--${propertyName}-${breakpoint}`] =
                            `${parsedValue}`;
                    });
                    return acc;
                },
                {},
            ),
        [mediaProperties],
    );

    return { mediaStyles, vars };
};
