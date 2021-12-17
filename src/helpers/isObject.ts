/**
 * Strict check on object type.
 */
export const isObject = (item: any) => typeof item === 'object' && !Array.isArray(item) && item !== null;
