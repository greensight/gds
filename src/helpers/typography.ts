import typographyHelper from '@utils/typography';
import baseTheme from '@utils/baseTheme';

/**
 * `typography` helper with baseTheme. For use with inner components styling (such autokits).
 */
const typography = (name: string) => typographyHelper(name, baseTheme);

export default typography;
