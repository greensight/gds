/** Импорт CSSObject нужен для tsc. */
import { CSSObject } from '@emotion/core';
import { typography as typographyHelper } from '../utils/typography';
import { baseTheme } from '../utils/baseTheme';
import { Theme } from '../types/Theme';

/**
 * `typography` helper with baseTheme. For use with inner components styling (such autokits).
 */
export const typography = (name: string) => typographyHelper(name, baseTheme as Theme);
