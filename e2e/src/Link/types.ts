import { LinkProps } from '@kit';
import { TestComponentProps } from '../../constants';

export type TestLinkProps = TestComponentProps<LinkProps, {
    leftItem?: boolean,
    rightItem?: boolean,
}>
