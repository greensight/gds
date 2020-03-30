/**
 * Converts any type to array (arrays are included).
 */
declare const toArray: <T>(arg: T | T[]) => T[];
export default toArray;
