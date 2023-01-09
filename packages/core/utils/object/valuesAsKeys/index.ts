export function valuesAsKeysFromArray<T extends string>(array: readonly T[]): { [key in T]: key } {
    return array.reduce((acc, key) => {
        acc[key] = key;
        return acc;
    }, {} as { [key in T]: key });
}

export function valuesAsKeys<T extends { [k: string]: unknown }>(obj: T): { [k in keyof T]: k } {
    const result = {} as { [k in keyof T]: k };
    (Object.keys(obj) as Array<keyof T>).forEach((key) => {
        result[key] = key;
    });
    return result;
}

export function createValuesAsKeysTypeGuard<T extends string>(
    object: { [key in keyof Record<T, T>]: key },
) {
    const valuesSet = new Set(Object.values(object));

    return (value: string): value is T => (
        valuesSet.has(value)
    );
}
