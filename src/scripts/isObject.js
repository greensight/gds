export const isObject = item => typeof item === 'object' && !Array.isArray(item) && item !== null;

export default isObject;
