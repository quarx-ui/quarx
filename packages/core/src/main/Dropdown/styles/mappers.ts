import { ButtonSize, QX_SIZE } from '@core';
import { DropdownSize } from './types';

export const mapSizeToFooterButtonsSize: Record<DropdownSize, ButtonSize> = {
    [QX_SIZE.small]: QX_SIZE.xSmall,
    [QX_SIZE.medium]: QX_SIZE.small,
    [QX_SIZE.large]: QX_SIZE.medium,
};
