import { ReactElement } from 'react';
import { OmitClassesAndStyles, WithClassesAndStyles } from '@core/styles';
import { BaseButtonProps } from '@core/components';
import { ButtonStyleKeys, ButtonCSSVarKeys, ButtonStyleParams } from './styles';

export interface ButtonPropsWithoutStyling extends OmitClassesAndStyles<BaseButtonProps> {
    /** Иконка расположенная слева */
    leftIcon?: ReactElement;

    /** Иконка расположенная справа */
    rightIcon?: ReactElement;
}

export type ButtonProps =
    ButtonPropsWithoutStyling &
    WithClassesAndStyles<ButtonStyleKeys, ButtonStyleParams, ButtonCSSVarKeys>;
