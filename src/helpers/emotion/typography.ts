/** Импорт CSSObject нужен для tsc. */
import { CSSObject } from '@emotion/react';

import { Theme } from '../../types/emotion/Theme';
import { baseTheme } from '../../utils/emotion/baseTheme';
import { typography as typographyHelper } from '../../utils/emotion/typography';

/**
 * `typography` helper with baseTheme. For use with inner components styling (such autokits).
 */
export const typography = (name: string) => typographyHelper(name, baseTheme as Theme);
