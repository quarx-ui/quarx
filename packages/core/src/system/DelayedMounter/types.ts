import { ComponentPropsWithHTML, JsxTag } from '@core';
import { ReactElement } from 'react';

export type DelayedMounterPropsWithoutHtml<Props extends object = object> =
    & Props
    & {
        /** @description Дочерний элемент */
        children: ReactElement | string;

        /** @description Продолжительность задержки
         *
         * @default 250 */
        timeout?: number;

        /** @description Компонент монтирован
         *
         * @default false */
        mounted?: boolean;

        /** @description Отключение задержки размонтирования
         *
         * @default false */
        disableTimeout?: boolean;

        /** @description Обработчик, вызываемый при монтировании компонента */
        onEnter?: () => void;

        /** @description Обработчик, вызываемый в начале размонтирования компонента */
        onExitStart?: () => void;

        /** @description Обработчик, вызываемый в конце размонтирования компонента */
        onExit?: () => void;
    }

export type DelayedMounterProps<
    Props extends object = object,
    Element extends JsxTag = 'div'
> = ComponentPropsWithHTML<DelayedMounterPropsWithoutHtml<Props>, Element>;
