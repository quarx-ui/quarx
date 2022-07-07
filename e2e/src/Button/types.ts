import { ButtonProps } from '@kit';

export interface TestButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
    leftIcon?: boolean,
    rightIcon?: boolean,
}
