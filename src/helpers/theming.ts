import { CSSObject } from '@emotion/react';
import { useCallback, useMemo } from 'react';

export type EnumLike = Record<string, any>;

export type BaseThemeState<V extends EnumLike, S extends EnumLike, T extends EnumLike = never> = {
    variant?: V | keyof V;
    size?: S | keyof S;
    theme?: T;
};

export type Fn<T, Args extends any[] = any[]> = (...args: Args) => T;
export type ValueOrFunction<T, Args extends any[] = any[]> = T | Fn<T, Args>;

export type StyleDefinition<State extends BaseThemeState<any, any, any>> = ValueOrFunction<
    CSSObject,
    [state: Omit<State, 'theme'>]
>;

export type OptionizedCSS<T> = Record<keyof T, CSSObject>;
export const extractCSSOption = <T>(optionized: OptionizedCSS<T>, option: T | keyof T) =>
    optionized[option as keyof T] as CSSObject;

export type ThemeDefininitionLike<State extends BaseThemeState<any, any, any>> = Record<any, StyleDefinition<State>>;

export const useThemeCSSPart = <
    S extends Omit<BaseThemeState<any, any, any>, 'theme'>,
    T extends ValueOrFunction<Record<any, StyleDefinition<S>>, [S]>,
>(
    theme: T,
    state: S,
) => {
    const actualTheme = useMemo<ThemeDefininitionLike<S>>(
        () => (typeof theme === 'function' ? theme(state) : theme),
        [state, theme],
    );

    return useCallback(
        <K extends T extends Fn<infer t> ? keyof t : keyof T>(
            key: K,
            extraData?: (T extends (...args: any[]) => infer R ? R[K] : T[K]) extends ValueOrFunction<
                CSSObject,
                [state: infer A]
            >
                ? Omit<A, keyof S>
                : never,
        ) => {
            const element = actualTheme[key];
            if (typeof element === 'function')
                return element(extraData ? { ...state, ...extraData } : state) as CSSObject;
            return element as CSSObject;
        },
        [state, actualTheme],
    );
};

export const useThemeCSS = <T extends { [key: string]: any }, S>(theme: T, state: S) =>
    useMemo(() => {
        const res: Record<string, any> = {};
        const keys = Object.keys(theme);

        keys.forEach((key) => {
            const element = theme[key];
            if (typeof element === 'function') res[key] = element(state);
            else res[key] = element;
        });

        return res as Record<keyof T, CSSObject>;
    }, [state, theme]);
