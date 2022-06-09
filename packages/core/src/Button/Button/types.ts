import { ReactElement } from 'react';
import { BaseButtonProps } from '@core/src/Button/BaseButton/types';
import { WithClassesAndStyles } from '@core/emotion-styles/types';
import { ButtonStyleKeys } from './style';

export interface ButtonPropsWithoutStyling extends Omit<BaseButtonProps, 'classes'> {
    /** Иконка расположенная слева */
    leftIcon?: ReactElement,

    /** Иконка расположенная справа */
    rightIcon?: ReactElement,
}

export type ButtonProps = ButtonPropsWithoutStyling & WithClassesAndStyles<ButtonStyleKeys>

export type {
    BaseButtonSize as ButtonSize,
    BaseButtonType as ButtonType,
    BaseButtonBorderRadius as ButtonBorderRadius,
    BaseButtonColor as ButtonColor,
} from '../BaseButton/types';
