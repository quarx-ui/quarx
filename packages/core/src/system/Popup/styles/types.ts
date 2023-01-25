import { Axis } from '@core/utils/hooks';

export type OmittedPopupStyleParams = Record<Axis, number>;

export interface PopupStyleParams extends OmittedPopupStyleParams {
    /** Полное отключение компонента Backdrop
     *
     * @default false */
    disableBackdrop: boolean;
}
