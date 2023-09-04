import { PickQxSize } from '@core/enums';

export interface DropdownWidths {
    /** Ширина Dropdown */
    width: number | string;

    /** Минимальная ширина Dropdown */
    minWidth: number | string;

    /** Максимальная ширина Dropdown */
    maxWidth: number | string;
}

export type DropdownSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface OmittedDropdownStyleParams extends DropdownWidths {
    /** Существование шапки компонента */
    headerExists: boolean;
}

export interface DropdownStyleParams extends OmittedDropdownStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: DropdownSize;

    /** Ограничение высоты контента dropdown
     *
     * @default 320px */
    maxBodyHeight?: number;

    /** Включена ли поисковая строка
     *
     * @default true */
    searchable: boolean;

    /** CSS свойство zIndex
     *
     * @default auto */
    zIndex?: number | string;
}
