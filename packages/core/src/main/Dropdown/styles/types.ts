import { PickQxSize } from '@core/enums';
import { DropdownWidths } from './utils';

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

    /** Включена ли поисковая строка
     *
     * @default true */
    searchable: boolean;

    /** CSS свойство zIndex
     *
     * @default auto */
    zIndex?: number | string;
}
