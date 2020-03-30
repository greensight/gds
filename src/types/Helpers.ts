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
export type ComponentStates = 'hover' | 'active' | 'disabled' | 'focus';
export type MergeElementProps<T extends React.ElementType, P extends object = {}> = Omit<React.HTMLProps<T>, keyof P> &
    P;
