import { QX_SIZE } from '@core/enums';
import { LinkStoryType } from './types';

export const defaultLinkArgs: LinkStoryType = {
    children: 'Настройки',
    size: QX_SIZE.xLarge,
    color: 'info',
    underline: 'always',
    disabled: false,
    showLeftItem: true,
    showRightItem: true,
};
