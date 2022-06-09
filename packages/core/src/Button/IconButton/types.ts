import { BaseButtonProps } from '@core';
import { IconButtonStyleKeys } from '@core/src/Button/IconButton/style';
import { WithClassesAndStyles } from '@core/emotion-styles/types';

export type IconButtonProps = Omit<BaseButtonProps, 'classes'> & WithClassesAndStyles<IconButtonStyleKeys>
