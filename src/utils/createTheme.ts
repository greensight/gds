import deepMerge from '@helpers/deepMerge';
import { ITokens, ITheme } from '../index.d';

const createTheme = ({ tokens = {}, settings = {} }: { tokens: ITokens; settings: ITheme }): ITheme =>
    deepMerge(tokens, settings);

export default createTheme;
