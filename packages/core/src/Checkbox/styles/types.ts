import { Values } from '@core/types';
import { SelectionBorderRadius, SelectionSize } from '@core/src/Selection/types';
import { CHECKBOX_COLOR } from '../constants';

export type CheckboxColor = Values<typeof CHECKBOX_COLOR>;

export interface CheckboxStyleParams {
    /** Состояние наведения */
    hover?: boolean,

    /** Цвет компонента */
    color?: CheckboxColor

    /** Размер компонента */
    size?: SelectionSize,

    /** Скругление компонента */
    borderRadius?: SelectionBorderRadius,

    /** Состояние компонента */
    checked?: boolean,

    /** Отключение возможности фокуса */
    disableFocus?: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled?: boolean,

    /** Состояние неопределенности (неполный выбор) */
    indeterminate?: boolean,
}
