import { ReactElement } from 'react';
import { WithClassesAndStyles } from '@core/styles';
import { BaseButtonProps, ButtonStyleParams } from '@core/src';
import { ButtonStyleKeys } from './style';

export interface ButtonPropsWithoutStyling extends Omit<BaseButtonProps, 'classes' | 'styles'> {
    /** Иконка расположенная слева */
    leftIcon?: ReactElement,

    /** Иконка расположенная справа */
    rightIcon?: ReactElement,
}

export type ButtonProps =
    ButtonPropsWithoutStyling &
    WithClassesAndStyles<ButtonStyleKeys, ButtonStyleParams>
