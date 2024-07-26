export function fastEquals(a: any, b: any) {
    // If both are the same object/reference or same primitive value
    if (a === b) return true;

    // If they are not the same type
    if (typeof a !== typeof b) return false;

    // If they are objects
    if (typeof a === 'object') {
        // If they are not the same class (Array, Object)
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;

        // If they are arrays, compare each element
        if (Array.isArray(a)) {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (!fastEquals(a[i], b[i])) return false;
            }
            return true;
        }

        // If they are objects, compare each key
        const keys = Object.keys(a);
        if (keys.length !== Object.keys(b).length) return false;
        for (const key of keys) {
            // eslint-disable-next-line no-prototype-builtins
            if (!b.hasOwnProperty(key)) return false;
            if (!fastEquals(a[key], b[key])) return false;
        }
        return true;
    }

    // If they are not the same primitive value
    return false;
}
