import { CSSObject } from '@emotion/react';
import { QX_SIZE } from '@core/enums';
import { typography } from '@core/styles';
import { AccordionSize } from './types';

export const sizeToAccordionPadding: Record<AccordionSize, number> = {
    [QX_SIZE.xSmall]: 12,
    [QX_SIZE.small]: 16,
    [QX_SIZE.medium]: 16,
    [QX_SIZE.large]: 24,
};

export const sizeToTextStyle: Record<AccordionSize, CSSObject> = {
    [QX_SIZE.xSmall]: typography.Text.M.Regular,
    [QX_SIZE.small]: typography.Text.M.Regular,
    [QX_SIZE.medium]: typography.Text.L.Regular,
    [QX_SIZE.large]: typography.Text.XL.Regular,
};
