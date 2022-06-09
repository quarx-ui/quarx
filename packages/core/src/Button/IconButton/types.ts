import { IconButtonStyleKeys } from '@core/src/Button/IconButton/style';
import { WithClassesAndStyles } from '@core/styles';
import { BaseButtonProps, ButtonStyleParams } from '@core/src';

export type IconButtonProps = Omit<BaseButtonProps, 'classes'>
& WithClassesAndStyles<IconButtonStyleKeys, ButtonStyleParams>
