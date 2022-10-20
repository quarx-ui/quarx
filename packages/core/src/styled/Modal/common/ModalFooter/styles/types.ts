import { BaseModalStyleParams, ModalDirection } from '@core/src/styled/Modal/common';

export interface ModalFooterStyleParams extends BaseModalStyleParams {
    /** Расположение переданных кнопок
     * @property horizontal Горизонтальное расположение
     * @property vertical Вертикальное расположение
     *
     * @default vertical */
    direction: ModalDirection,
}
