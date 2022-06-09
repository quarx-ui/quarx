export function valuesAsKeysFromArray<T extends Readonly<string[]>>(arr: Readonly<T>): { [k in T[number]]: k } {
    type R = { [k in T[number]]: k };
    const result = {} as R;
    (arr).forEach((key: keyof R) => {
        result[key] = key;
    });
    return result;
}

export function valuesAsKeys<T extends { [k: string]: unknown }>(obj: T): { [k in keyof T]: k } {
    const result = {} as { [k in keyof T]: k };
    (Object.keys(obj) as Array<keyof T>).forEach((key) => {
        result[key] = key;
    });
    return result;
}
