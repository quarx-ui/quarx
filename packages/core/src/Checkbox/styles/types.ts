import { SelectionBorderRadius, SelectionSize } from '@core/src/Selection/types';
import { BaseColors } from '@core/styles';

export interface CheckboxStyleParams {
    /** Состояние наведения */
    hover: boolean,

    /** Цвет компонента */
    color?: BaseColors

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
