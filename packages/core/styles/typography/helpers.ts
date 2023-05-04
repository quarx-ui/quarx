import { QX_SIZE, QxSize } from '../../enums';
import { Typography } from './typography';

export const sizeToHeadlineSize: Record<QxSize, keyof Typography['Headline']> = {
    [QX_SIZE.xSmall]: 'XS',
    [QX_SIZE.small]: 'S',
    [QX_SIZE.medium]: 'M',
    [QX_SIZE.large]: 'L',
    [QX_SIZE.xLarge]: 'XL',
};
