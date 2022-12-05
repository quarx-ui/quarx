import { ButtonProps } from '@kit';
import { TestComponentProps } from '@e2e/constants';

export type TestButtonProps = TestComponentProps<ButtonProps, {
    leftIcon?: boolean,
    rightIcon?: boolean,
}>
