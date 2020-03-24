export type PalettesTheme = Record<string, string[]>;
export type ColorsTheme = Record<string, string>;
export type ShadowsTheme = Record<string, string>;
export type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
export type AllowMedia<T> = T | Partial<Record<Breakpoint, T>>;
export type ComponentStates = 'default' | 'hover' | 'active' | 'disabled' | 'focus';
