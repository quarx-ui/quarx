export const valuesFromHsb = (hsb: string) => {
    const hsbRegExp = /hsba?\((\d{1,2}|[0-2]\d{2}|3[0-5]\d|360), ?(\d{1,2}|100), ?(\d{1,2}|100)(?:, ?(0|1|\.\d+|0\.\d+))?\)/;
    const hsbMatch = hsb.match(hsbRegExp);

    if (!hsbMatch) {
        throw new Error("value doesn't match HSB format ");
    }

    const [, h, s, b, a] = hsbMatch;

    return {
        h: +h,
        s: +s,
        b: +b,
        a: +(a ?? 1),
    };
};
