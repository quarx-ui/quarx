import { Values } from '@core/types';
import { PickQxSize } from '@core/enums';
import { FOOTER_DIRECTION } from '../constants';

export type FooterBlockSize = PickQxSize<'small' | 'medium'>
export type FooterBlockDirection = Values<typeof FOOTER_DIRECTION>

export interface FooterBlockStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: FooterBlockSize;

    /** Расположение переданных кнопок
     * @property horizontal Горизонтальное расположение
     * @property vertical Вертикальное расположение
     *
     * @default vertical */
    direction: FooterBlockDirection;
}
