import { LinkProps } from '@kit';
import { TestComponentProps } from '@e2e/constants';

export type TestLinkProps = TestComponentProps<LinkProps, {
    leftItem?: boolean;
    rightItem?: boolean;
}>
