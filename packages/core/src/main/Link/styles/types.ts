import { PaletteColor, Typography } from '@core';
import { LINK_UNDERLINE } from '../constants';

export type LinkSize = keyof Typography['Text'] | 'inherit';
export type LinkColor = PaletteColor;
export type LinkUnderline = keyof typeof LINK_UNDERLINE;

export interface LinkStyleParams {
    /** @description Подчеркивание в ссылке
     *
     * @property always подчеркивание отображается всегда
     * @property hover подчеркивание отображается только при наведении
     * @property none подчеркивание не отображается
     *
     * @default always */
    underline: LinkUnderline;

    /** @description Цвет компонента
     * Определяет цвет текста и иконок внутри ссылки, а также цвет подчеркивания
     *
     * @default info */
    color: LinkColor;

    /** @description Размер и стили текста в ссылке
     * По умолчанию стили текста наследуются от родительского блока
     *
     * @default inherit */
    size: LinkSize;

    /** @description Изменяет состояние компонента на активное/неактивное.
     * Отключает обработчики событий
     *
     * @default false */
    disabled: boolean;
}
