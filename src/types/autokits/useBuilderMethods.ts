import { ReactNode } from 'react';

type IconsReqType = () => __WebpackModuleApi.RequireContext | Record<string, () => ReactNode>;

export interface IUseBuilderMethodsReturn {
    getIconsReq: IconsReqType;
    getIconsReqKeys: (iconReq: ReturnType<IconsReqType>) => string[];
    getIconComponent: (iconReq: ReturnType<IconsReqType>, name: string) => () => ReactNode;
}

export type UseBuilderMethodsType = () => IUseBuilderMethodsReturn;
