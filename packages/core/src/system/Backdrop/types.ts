import { ComponentPropsWithHTML, TransitionProps, WithClassesAndStyles } from '@core';
import { BackdropStyleKeys, BackdropStyleParams } from './styles';

export interface BackdropPropsWithoutHtml extends
    WithClassesAndStyles<BackdropStyleKeys, BackdropStyleParams>,
    Partial<BackdropStyleParams>
{
    /** @description Состояние отображения
     *
     * @default true */
    mounted?: boolean;

    /** @description Свойства анимации */
    TransitionProps?: Partial<TransitionProps>;

    /** @description Отключить анимации
     *
     * @default false */
    disableTransition?: boolean;
}

export type BackdropProps = ComponentPropsWithHTML<BackdropPropsWithoutHtml>;
