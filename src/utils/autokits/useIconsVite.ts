import { ReactNode } from 'react';
import { IUseBuilderMethodsReturn, UseBuilderMethodsType } from '../../types/autokits/useBuilderMethods';

const getIconsReq: IUseBuilderMethodsReturn['getIconsReq'] = () =>
    import.meta.glob(`/src/**/*.svg`, {
        import: 'default',
        eager: true,
    }) as Record<string, () => ReactNode>;

const getIconsReqKeys: IUseBuilderMethodsReturn['getIconsReqKeys'] = (iconReq) => Object.keys(iconReq);

const getIconComponent: IUseBuilderMethodsReturn['getIconComponent'] = (iconReq, name) =>
    (iconReq as Record<string, () => ReactNode>)[name];

export const useIconsVite: UseBuilderMethodsType = () => {
    return { getIconsReq, getIconsReqKeys, getIconComponent };
};
