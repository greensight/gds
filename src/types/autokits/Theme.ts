import { GlobalTheme } from '../emotion/Global';
import { Tokens } from '../emotion/Theme';

export interface IAutokitsTheme extends Tokens {
    /** Global theme settings. */
    global?: GlobalTheme;
}
