export type WithCustomType<T extends object> = keyof T;
export type CustomUnionType<T extends string> = Record<T, string>;
