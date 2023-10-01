import { LinkProps, LinkSize } from '@core';

export interface LinkStoryType extends Omit<LinkProps, 'size'> {
    size?: LinkSize;
    showLeftItem: boolean;
    showRightItem: boolean;
}
