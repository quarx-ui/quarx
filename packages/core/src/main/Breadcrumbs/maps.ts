import { QX_SIZE } from '@core';
import { BreadcrumbSize } from './struct';

export const mapSizeToSpacing: Record<BreadcrumbSize, string> = {
    [QX_SIZE.small]: '6px',
    [QX_SIZE.medium]: '6px',
    [QX_SIZE.large]: '8px',
};
