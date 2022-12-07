export const omitProps = <T extends object = object>(
    initialProps: T,
    excludedProps: Array<keyof T>,
) => {
    const props = { ...initialProps };

    excludedProps.forEach((property) => {
        if (!props[property]) { return; }

        delete props[property];
    });

    return props;
};
