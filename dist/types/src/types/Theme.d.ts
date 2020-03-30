import Tokens from './Tokens';
import GlobalTheme from './Global';
import ButtonTheme from './Button';
export interface ComponentsTheme {
    /** `Button` component theme settings. */
    Button?: ButtonTheme;
}
export default interface Theme extends Tokens {
    /** Global theme settings. */
    global?: GlobalTheme;
    /** Components theme settings. */
    components?: ComponentsTheme;
}
