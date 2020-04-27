import TypographyTheme from './Typography';
import LayoutTheme from './Layout';
import GlobalTheme from './Global';
import ButtonTheme from './Button';
import { RadioItemTheme } from './Radio';
import FormTheme, { FormHintTheme, FormInputTheme, FormErrorTheme } from './Form';
import LegendTheme from './Legend';

export type PalettesTheme = Record<string, string[]>;
export type ColorsTheme = Record<string, string>;
export type ShadowsTheme = Record<string, string>;

export interface Tokens {
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

export interface ComponentsTheme {
    /** `Button` component theme settings. */
    Button?: ButtonTheme;
    /** `Legend` component theme settings. */
    Legend?: LegendTheme;
    /** `Form` component theme settings. */
    Form?: FormTheme;
    /** `FormHint` component theme settings. */
    FormHint?: FormHintTheme;
    /** `FormInput` component theme settings. */
    FormInput?: FormInputTheme;
    /** `FormError` component theme settings. */
    FormError?: FormErrorTheme;
    /** `RadioItem` component theme settings. */
    RadioItem?: RadioItemTheme;
}

export default interface Theme extends Tokens {
    /** Global theme settings. */
    global?: GlobalTheme;
    /** Components theme settings. */
    components?: ComponentsTheme;
}
