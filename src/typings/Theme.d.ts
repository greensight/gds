import { PalettesTheme, ColorsTheme, ShadowsTheme } from './Types';
import TypographyTheme from './Typography';
import LayoutTheme from './Layout';
import GlobalTheme from './Global';
import ButtonTheme from './Button';

export default interface Theme {
    /** Global theme settings. */
    global?: GlobalTheme;
    /** Palettes theme settings. */
    palettes?: PalettesTheme;
    /** Colors theme settings. */
    colors?: ColorsTheme;
    /** Shadows theme settings. */
    shadows?: ShadowsTheme;
    /** Typography theme settings. */
    typography?: TypographyTheme;
    /** Layout theme settings. */
    layout?: LayoutTheme;
    /** Components theme settings. */
    components?: {
        /** `Button` component theme settings. */
        Button?: ButtonTheme;
    };
}
