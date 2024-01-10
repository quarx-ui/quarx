import { ComponentPropsWithHTML, TransitionProps, WithClassesAndStyles } from '@core';
import { BackdropStyleKeys, BackdropStyleParams } from './styles';

export interface BackdropPropsWithoutHtml extends
    WithClassesAndStyles<BackdropStyleKeys, BackdropStyleParams>,
    Partial<BackdropStyleParams>
{
    /** Состояние отображения
     *
     * @default true */
    mounted?: boolean;

    /** Свойства анимации */
    TransitionProps?: Partial<TransitionProps>;

    /** Отключить анимации
     *
     * @default false */
    disableTransition?: boolean;
}

export type BackdropProps = ComponentPropsWithHTML<BackdropPropsWithoutHtml>;
