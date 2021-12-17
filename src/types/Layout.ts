export type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
export type AllowMedia<T> = T | Partial<Record<Breakpoint, T>>;

export interface LayoutTheme {
    /** Project breakpoints. */
    breakpoints: Record<Breakpoint, number>;
    /** Columns count. */
    cols: Partial<Record<Breakpoint, number>>;
    /** Gaps between columns. */
    gap: Partial<Record<Breakpoint, number>>;
    /** Container paddings. */
    padding: Partial<Record<Breakpoint, number>>;
    /** Container width. Pass `'none'` to disable fixed width. */
    container: Partial<Record<Breakpoint, number | 'none'>>;
    /** Container's left offset. Pass `0` to breakpoint with disabled fixed width. */
    marginLeft: Partial<Record<Breakpoint, number | 'auto'>>;
    /** Container's right offset. Pass `0` to breakpoint with disabled fixed width. */
    marginRight: Partial<Record<Breakpoint, number | 'auto'>>;
}
