import { QX_SIZE } from '@quarx-ui/core/enums';
import { CrossIcon, CrossIconSmall } from './assets';

export const sizeToIcon = {
    [QX_SIZE.small]: <CrossIconSmall />,
    [QX_SIZE.large]: <CrossIcon />,
};
