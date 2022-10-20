import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { BackdropStyleKeys, BackdropStyleParams } from './styles';

export type BackdropPropsWithoutHtml =
    WithClassesAndStyles<BackdropStyleKeys, BackdropStyleParams>
    & Partial<BackdropStyleParams>

export type BackdropProps = ComponentPropsWithHTML<BackdropPropsWithoutHtml>
