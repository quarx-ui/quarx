import { BadgeProps } from '@kit';
import { TestComponentProps } from '@e2e/constants';

export type TestBadgeProps = TestComponentProps<BadgeProps, {
    leftItem?: boolean;
    rightItem?: boolean;
}>
