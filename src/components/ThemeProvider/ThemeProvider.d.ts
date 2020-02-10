import { ITheme } from '../../index.d.ts';

export default interface IThemeProvider {
    /** Объект темы */
    theme: ITheme;
    /** Код с доступом к теме */
    children: React.ReactNode;
}
