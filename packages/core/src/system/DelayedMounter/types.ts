import { ComponentPropsWithHTML, JsxTag } from '@core';
import { ReactElement } from 'react';

export type DelayedMounterPropsWithoutHtml<Props extends object = object> =
    & Props
    & {
        /** Дочерний элемент */
        children: ReactElement | string,

        /** Продолжительность задержки
         *
         * @default 250 */
        timeout?: number,

        /** Компонент монтирован
         *
         * @default false */
        mounted?: boolean,

        /** Отключение задержки размонтирования
         *
         * @default false */
        disableTimeout?: boolean,

        /** Обработчик, вызываемый при монтировании компонента */
        onEnter?: () => void,

        /** Обработчик, вызываемый в начале размонтирования компонента */
        onExitStart?: () => void,

        /** Обработчик, вызываемый в конце размонтирования компонента */
        onExit?: () => void,
    }

export type DelayedMounterProps<
    Props extends object = object,
    Element extends JsxTag = 'div'
> = ComponentPropsWithHTML<DelayedMounterPropsWithoutHtml<Props>, Element>;
