import TypographyTheme from './Typography';
import LayoutTheme from './Layout';

export type PalettesTheme = Record<string, string[]>;
export type ColorsTheme = Record<string, string>;
export type ShadowsTheme = Record<string, string>;

export default interface Tokens {
    /** Palettes theme settings. You can get these settings via tokens from `Palettes` frame. */
    palettes?: PalettesTheme;
    /** Colors theme settings. You can get these settings via tokens from `Colors` frame. */
    colors?: ColorsTheme;
    /** Shadows theme settings. You can get these settings via tokens from `Shadows` frame. */
    shadows?: ShadowsTheme;
    /** Typography theme settings. You can get these settings via tokens from `Typography` frame. */
    typography?: TypographyTheme;
    /** Layout theme settings. You can get these settings via tokens from `Layout` frame. */
    layout?: LayoutTheme;
}
