import { DEFAULT_BROWSER_FONT_SIZE, DEFAULT_FONT_SIZE } from '../baseTypography/constants';

export const createPxToRem = (defaultFontSize: number) => (sizeInPx: number): number => (
    (defaultFontSize / DEFAULT_FONT_SIZE) * (sizeInPx / DEFAULT_BROWSER_FONT_SIZE)
);
