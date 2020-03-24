import { PalettesTheme, ColorsTheme, ShadowsTheme } from './Types';
import { TypographyTokens } from './Typography';
import LayoutTheme from './Layout';

export default interface Tokens {
    /** Tokens from `Palettes` frame. */
    palettes?: PalettesTheme;
    /** Tokens from `Colors` frame. */
    colors?: ColorsTheme;
    /** Tokens from `Shadows` frame. */
    shadows?: ShadowsTheme;
    /** Tokens from `Typography` frame. */
    typography?: TypographyTokens;
    /** Tokens from `Layout` frame. */
    layout?: LayoutTheme;
}
