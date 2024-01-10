export const omitProps = <T extends object, Keys extends keyof T>(
    initialProps: T,
    excludedProps: Array<Keys>,
): Omit<T, Keys> => {
    const props = { ...initialProps };

    excludedProps.forEach((property) => {
        if (!(property in props)) { return; }

        delete props[property];
    });

    return props;
};
