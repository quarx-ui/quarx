export type Narrow<T extends string, V extends T> = Extract<T, V>
