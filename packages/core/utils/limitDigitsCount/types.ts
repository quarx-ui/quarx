export type NonNegativeInteger<T extends number> =
    number extends T
        ? never
        : `${T}` extends `-${string}` | `${string}.${string}`
            ? never
            : T;
