import { SelectionBorderRadius, SelectionSize } from '@core/src/Selection/types';
import { PaletteColor } from '@core/styles';

export interface CheckboxStyleParams {
    /** Состояние наведения */
    hover: boolean,

    /** Цвет компонента */
    color?: PaletteColor

    /** Размер компонента */
    size: SelectionSize,

    /** Скругление компонента */
    borderRadius: SelectionBorderRadius,

    /** Состояние компонента */
    checked: boolean,

    /** Отключение возможности фокуса */
    disableFocus: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled: boolean,

    /** Состояние неопределенности (неполный выбор) */
    indeterminate: boolean,
}
