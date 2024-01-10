import { Axis } from '@core/utils/hooks';
import { Values } from '@core/types';
import { POPUP_PAPER_REFERENCE } from './constants';

export type PopupPaperReference = Values<typeof POPUP_PAPER_REFERENCE>;

export type OmittedPopupStyleParams = Record<Axis, number>;

export interface PopupStyleParams extends OmittedPopupStyleParams {
    /** Полное отключение компонента Backdrop
     *
     * @default false */
    disableBackdrop: boolean;

    /** Позиционирование контейнера
     * При relative необходимо указать position: relative,
     * относительно которого будут отсчитываться координаты объекта
     *
     * @default window */
    reference: PopupPaperReference;
}
