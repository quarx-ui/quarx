import { TypographyWeight, TypographyWeightNumber } from './types';
import { TYPOGRAPHY_WEIGHT } from './constants';

export const typographyWeightToNumber: Record<TypographyWeight, TypographyWeightNumber> = {
    [TYPOGRAPHY_WEIGHT.thin]: 100,
    [TYPOGRAPHY_WEIGHT.extraLight]: 200,
    [TYPOGRAPHY_WEIGHT.light]: 300,
    [TYPOGRAPHY_WEIGHT.normal]: 400,
    [TYPOGRAPHY_WEIGHT.medium]: 500,
    [TYPOGRAPHY_WEIGHT.semibold]: 600,
    [TYPOGRAPHY_WEIGHT.bold]: 700,
    [TYPOGRAPHY_WEIGHT.extraBold]: 800,
    [TYPOGRAPHY_WEIGHT.black]: 900,
};
