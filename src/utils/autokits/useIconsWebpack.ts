import { ReactNode } from 'react';
import { IUseBuilderMethodsReturn, UseBuilderMethodsType } from '../../types/autokits/useBuilderMethods';

const getIconsReq: IUseBuilderMethodsReturn['getIconsReq'] = () => {
    return require.context('/src', true, /\.svg$/);
};

const getIconsReqKeys: IUseBuilderMethodsReturn['getIconsReqKeys'] = (iconReq) => iconReq.keys() as never as string[];

const getIconComponent: IUseBuilderMethodsReturn['getIconComponent'] = (iconReq, name) =>
    (iconReq as __WebpackModuleApi.RequireContext)(name).default as () => ReactNode;

export const useIconsWebpack: UseBuilderMethodsType = () => {
    return { getIconsReq, getIconsReqKeys, getIconComponent };
};
