import { OmitClassesAndStyles, WithClassesAndStyles } from '@core/styles';
import { BaseButtonProps, BaseButtonStyleParams } from '@core/components';
import { IconButtonStyleKeys, IconButtonCSSVarKeys } from './styles';

export type IconButtonProps =
    & OmitClassesAndStyles<BaseButtonProps>
    & WithClassesAndStyles<IconButtonStyleKeys, BaseButtonStyleParams, IconButtonCSSVarKeys>;
