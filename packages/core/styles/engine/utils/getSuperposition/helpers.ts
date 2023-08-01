export const mixPixels = (d: number, s: number) => Math.round(d + (s - d) / 2);
export const mixPixelsWithAlpha = (d: number, s: number, a: number) => Math.round(d * (1 - a) + s * a);
export const stackPixels = (d: number, s: number) => Math.floor(s + d);
export const preMultiplyPixel = (px = 0, alpha = 0) => Math.floor(px * alpha);
export const multiplyAlpha = (dA: number, sA: number) => sA + dA * (1 - sA);
export const roundDecimals = (value: number, precision = 100) => Math.floor(value * precision) / precision;
export const getAlphaFactor = (dA: number, sA: number) => {
    const sourceIsBigger = dA < sA;
    const factor = sourceIsBigger
        ? dA / sA
        : sA / dA;
    const reverseFactor = 1 - factor;

    return {
        d: roundDecimals(sourceIsBigger ? factor : reverseFactor),
        s: roundDecimals(sourceIsBigger ? reverseFactor : factor),
    };
};
