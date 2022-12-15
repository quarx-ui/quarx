import { ReactElement } from 'react';
import { OmitClassesAndStyles, WithClassesAndStyles } from '@core/styles';
import { BaseButtonProps, ButtonStyleParams } from '@core/src';
import { ButtonStyleKeys, ButtonCSSVarKeys } from './styles';

export interface ButtonPropsWithoutStyling extends OmitClassesAndStyles<BaseButtonProps> {
    /** Иконка расположенная слева */
    leftIcon?: ReactElement;

    /** Иконка расположенная справа */
    rightIcon?: ReactElement;
}

export type ButtonProps =
    ButtonPropsWithoutStyling &
    WithClassesAndStyles<ButtonStyleKeys, ButtonStyleParams, ButtonCSSVarKeys>;
