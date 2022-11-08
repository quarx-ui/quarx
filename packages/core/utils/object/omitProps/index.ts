export const omitProps = <T extends object = object>(
    initialProps: T,
    excludedProps: Array<keyof T>,
) => Object.entries(initialProps).reduce<T>((acc, [key, property]) => {
    if (excludedProps.includes(key as keyof T)) {
        return acc;
    }

    return {
        ...acc,
        [key]: property,
    };
}, {} as T);
