import deepmerge from 'deepmerge';
import Theme from '@typings/Theme';

/* Тип токенов сделан через any, т.к. туда передаётся константа, полученная из JSON. Использование здесь типа Tokens во-первых потребует передачи tokens as Tokens, а во-вторых помешает обращаться к рекордам вроде цветов при прописывании темы, т.к. токены перестанут быть константой. Типизация же им ни к чему, т.к. токены не пишутся руками. */

/**
 * Helper for creating custom theme. Makes deep merge of tokens and theme settings.
 */
const createTheme = ({ tokens = {}, settings = {} }: { tokens?: any; settings?: Theme }): Theme =>
    deepmerge(tokens, settings);

export default createTheme;
