export type Values<T> = T[keyof T];

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
