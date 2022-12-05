import { ComponentPropsWithHTML, TransitionProps, WithClassesAndStyles } from '@core';
import { BackdropStyleKeys, BackdropStyleParams } from './styles';

export interface BackdropPropsWithoutHtml extends
    WithClassesAndStyles<BackdropStyleKeys, BackdropStyleParams>,
    Partial<BackdropStyleParams>
{
    mounted?: boolean,
    TransitionProps?: Partial<TransitionProps>,
    disableTransition?: boolean,
}

export type BackdropProps = ComponentPropsWithHTML<BackdropPropsWithoutHtml>
