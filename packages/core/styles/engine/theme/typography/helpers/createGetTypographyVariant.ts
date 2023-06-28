import { CSSProperties } from 'react';
import { TYPOGRAPHY_WEIGHT } from '../constants';
import { createPxToRem } from './createPxToRem';

export const createGetTypographyVariant = (
    fontFamily: string,
    defaultFontSize: number,
) => {
    const pxToRem = createPxToRem(defaultFontSize);

    return (
        sizeInPx: number,
        lineHeight: number,
        letterSpacing?: number | string,
        fontWeight: number | string = TYPOGRAPHY_WEIGHT.regular,
    ): CSSProperties => ({
        fontFamily,
        fontSize: `${pxToRem(sizeInPx)}rem`,
        fontWeight,
        letterSpacing,
        lineHeight,
    });
};
