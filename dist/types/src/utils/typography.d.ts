import { CSSObject } from '@emotion/core';
import Theme from '../types/Theme';
/**
 * Helper for typography styles usage. Generate typography CSS rules by style name included mobile version, fluid typography and variable fonts support.
 *
 * By default helper uses GDS base theme. Recommended way to use this helper with your own theme is define wrapper with your theme as second argument:
 *
 * ```
 * import { typography as typographyHelper } from '@greensight/gds';
 * import theme from '@scripts/theme';
 *
 * const typography = (name: string) => typographyHelper(name, theme);
 *
 * export default typography;
 * ```
 */
declare const typography: (name: string | undefined, theme?: Theme) => CSSObject | undefined;
export default typography;
