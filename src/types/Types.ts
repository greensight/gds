export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];
export type SVGRIcon = React.FC<
    React.SVGProps<SVGSVGElement> & {
        /** Alternative text in title tag. */
        title?: string;
    }
>;
export type PalettesTheme = Record<string, string[]>;
export type ColorsTheme = Record<string, string>;
export type ShadowsTheme = Record<string, string>;
export type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
export type AllowMedia<T> = T | Partial<Record<Breakpoint, T>>;
export type ComponentStates = 'hover' | 'active' | 'disabled' | 'focus';
