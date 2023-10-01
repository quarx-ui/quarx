import { BaseTypographySize, PaletteColor, Typography } from '@core';
import { LINK_UNDERLINE } from '../constants';

export type LinkSize =
    | 'inherit'
    | BaseTypographySize

export type LinkColor = PaletteColor;
export type LinkUnderline = keyof typeof LINK_UNDERLINE;

export interface LinkStyleParams {
    /** Подчеркивание в ссылке
     *
     * - **always** – подчеркивание отображается всегда
     * - **hover** – подчеркивание отображается только при наведении
     * - **none** – подчеркивание не отображается
     *
     * @default always */
    underline: LinkUnderline;

    /** Цвет компонента
     * Определяет цвет текста и иконок внутри ссылки, а также цвет подчеркивания
     *
     * @default info */
    color: LinkColor;

    /** Размер и стили текста в ссылке
     * По умолчанию стили текста наследуются от родительского блока
     *
     * @default inherit */
    size:
    | LinkSize
    /** @deprecated */
    | keyof Typography['Text'];

    /** Изменяет состояние компонента на активное/неактивное.
     * Отключает обработчики событий
     *
     * @default false */
    disabled: boolean;
}
