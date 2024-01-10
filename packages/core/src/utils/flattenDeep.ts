const baseFlatten = (array: unknown[], result: unknown[] = []) => {
    if (array === null) {
        return result;
    }

    array.forEach((value) => {
        if (Array.isArray(value)) {
            baseFlatten(value, result);
        } else {
            // eslint-disable-next-line no-param-reassign
            result[result.length] = value;
        }
    });

    return result;
};

export const flattenDeep = (value: unknown) => (
    Array.isArray(value) ? baseFlatten(value) : [value].filter(Boolean)
);
