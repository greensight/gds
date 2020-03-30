/// <reference types="react" />
export declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export declare type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
export declare type SVGRIcon = React.FC<React.SVGProps<SVGSVGElement> & {
    /** Alternative text in title tag. */
    title?: string;
}>;
export declare type PalettesTheme = Record<string, string[]>;
export declare type ColorsTheme = Record<string, string>;
export declare type ShadowsTheme = Record<string, string>;
export declare type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
export declare type AllowMedia<T> = T | Partial<Record<Breakpoint, T>>;
export declare type ComponentStates = 'hover' | 'active' | 'disabled' | 'focus';
