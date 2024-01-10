type NullOrUndefined = null | undefined;

export const isNullOrUndefined = <T>(
    value: T | NullOrUndefined,
): value is NullOrUndefined => {
    const isNull = value === null;
    const isUndefined = typeof value === 'undefined';
    return isNull || isUndefined;
};
