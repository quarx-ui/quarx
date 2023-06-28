import { QxSize, Values } from '@core';
import { CSSProperties } from 'react';
import { BASE_TYPOGRAPHY_TYPE } from './constants';
import { WithOverwrites } from '../../types';

export type BaseTypographyType = Values<typeof BASE_TYPOGRAPHY_TYPE>

export type BaseTypographySize = QxSize

export type BaseTypography = Record<BaseTypographyType, Record<BaseTypographySize, CSSProperties>>

export interface CreateBaseTypographyOptions extends WithOverwrites<BaseTypography> {
    fontFamily: { text: string; headline: string };
    defaultFontSize: number;
}
