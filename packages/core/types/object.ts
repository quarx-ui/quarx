export type Values<T> = T[keyof T];

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export type NonNullableFields<T> = {
    [P in keyof T]: NonNullable<T[P]>;
}

export type PickByType<T, Value> = {
    [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P]
}
