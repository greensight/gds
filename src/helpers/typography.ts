import typographyHelper from '@utils/typography';
import baseTheme from '@utils/baseTheme';
import Theme from '@typings/Theme.d';

/**
 * `typography` helper with baseTheme. For use with inner components styling (such autokits).
 */
const typography = (name: string) => typographyHelper(name, baseTheme as Theme);

export default typography;
