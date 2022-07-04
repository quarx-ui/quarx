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
