function deepMerge<T>(x: Partial<T>, y: Partial<T>): T;
function deepMerge<T1, T2>(x: Partial<T1>, y: Partial<T2>): T1 & T2;
function deepMerge(target: any, source: any) {
    const isObject = (obj: any) => obj && typeof obj === 'object';

    if (!isObject(target) || !isObject(source)) return source;

    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = deepMerge({ ...targetValue }, sourceValue);
        } else {
            target[key] = sourceValue;
        }
    });

    return target;
}

export default deepMerge;
