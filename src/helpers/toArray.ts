/**
 * Converts any type to array (arrays are included).
 */
const toArray = <T>(arg: T | Array<T>): Array<T> => [].concat(...[arg as any]);

export default toArray;
