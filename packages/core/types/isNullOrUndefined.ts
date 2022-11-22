type NullOrUndefined = null | undefined;

export const isNullOrUndefined = (
// eslint-disable-next-line
    value: any,
): value is NullOrUndefined => {
    const isNull = value === null;
    const isUndefined = value === undefined;
    return isNull || isUndefined;
};
