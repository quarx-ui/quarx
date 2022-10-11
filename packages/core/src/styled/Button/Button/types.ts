import { ReactElement } from 'react';
import { WithClassesAndStyles } from '@core/styles';
import { BaseButtonProps, ButtonStyleParams } from '@core/src';
import { ButtonStyleKeys, ButtonCSSVarKeys } from './styles';

export interface ButtonPropsWithoutStyling extends BaseButtonProps {
    /** Иконка расположенная слева */
    leftIcon?: ReactElement,

    /** Иконка расположенная справа */
    rightIcon?: ReactElement,
}

export type ButtonProps =
    ButtonPropsWithoutStyling &
    WithClassesAndStyles<ButtonStyleKeys, ButtonStyleParams, ButtonCSSVarKeys>
