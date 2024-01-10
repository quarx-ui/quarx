import { QX_SIZE } from '@core/enums';
import { AccordionSize } from './types';

export const sizeToAccordionPadding: Record<AccordionSize, number> = {
    [QX_SIZE.xSmall]: 12,
    [QX_SIZE.small]: 16,
    [QX_SIZE.medium]: 16,
    [QX_SIZE.large]: 24,
};
