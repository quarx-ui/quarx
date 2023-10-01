import { QX_SIZE, QxSize } from '../../enums';
import { Typography } from './typography';

export const sizeToHeadlineSize: Record<QxSize, keyof Typography['Headline']> = {
    [QX_SIZE.xSmall]: 'XS',
    [QX_SIZE.small]: 'S',
    [QX_SIZE.medium]: 'M',
    [QX_SIZE.large]: 'L',
    [QX_SIZE.xLarge]: 'XL',
};

export const oldTypographySizeToSize: Record<keyof Typography['Text'] | keyof Typography['Headline'], QxSize> = {
    XS: QX_SIZE.xSmall,
    S: QX_SIZE.small,
    M: QX_SIZE.medium,
    L: QX_SIZE.large,
    XL: QX_SIZE.xLarge,
};
