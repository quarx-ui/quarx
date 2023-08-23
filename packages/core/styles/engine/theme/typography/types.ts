import { CustomTypography, Values } from '@core';
import { TYPOGRAPHY_WEIGHT } from './constants';
import { BaseTypography, CreateBaseTypographyOptions } from './baseTypography';
import { WithOverwrites } from '../types';

export type TypographyWeight = Values<typeof TYPOGRAPHY_WEIGHT>

export type TypographyWeightNumber = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface Typography extends CustomTypography {
    base: BaseTypography;
}

export interface CreateTypographyArg extends WithOverwrites<Typography> {
    fontFamily?: string | CreateBaseTypographyOptions['fontFamily'];
    defaultFontSize?: CreateBaseTypographyOptions['defaultFontSize'];
}
