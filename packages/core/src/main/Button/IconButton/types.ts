import { OmitClassesAndStyles, WithClassesAndStyles } from '@core/styles';
import { BaseButtonProps, ButtonStyleParams } from '@core/src';
import { IconButtonStyleKeys, IconButtonCSSVarKeys } from './styles';

export type IconButtonProps =
    & OmitClassesAndStyles<BaseButtonProps>
    & WithClassesAndStyles<IconButtonStyleKeys, ButtonStyleParams, IconButtonCSSVarKeys>;
