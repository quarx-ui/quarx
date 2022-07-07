import { BadgeProps } from '@kit';

export interface TestBadgeProps extends Omit<Partial<BadgeProps>, 'leftItem' | 'rightItem'> {
    leftItem?: boolean,
    rightItem?: boolean
}
