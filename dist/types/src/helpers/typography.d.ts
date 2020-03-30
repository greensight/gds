/** Импорт CSSObject нужен для tsc. */
import { CSSObject } from '@emotion/core';
/**
 * `typography` helper with baseTheme. For use with inner components styling (such autokits).
 */
declare const typography: (name: string) => CSSObject | undefined;
export default typography;
