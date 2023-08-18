const baseFlatten = (array: any[], result: any[] = []) => {
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

export const flattenDeep = (array: any) => (
    array?.length ? baseFlatten(array) : [array].filter(Boolean)
);
