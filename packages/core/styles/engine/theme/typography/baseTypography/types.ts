import { QxSize, Values } from '@core';
import { CSSObject } from '@emotion/react';
import { BASE_TYPOGRAPHY_TYPES } from './constants';
import { WithOverwrites } from '../../types';

export type BaseTypographyType = Values<typeof BASE_TYPOGRAPHY_TYPES>

export type BaseTypographySize = QxSize

export type BaseTypography = Record<BaseTypographyType, Record<BaseTypographySize, CSSObject>>

export interface CreateBaseTypographyOptions extends WithOverwrites<BaseTypography> {
    fontFamily: { text: string; headline: string };
    defaultFontSize: number;
}
