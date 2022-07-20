import { SelectionSize } from '@core/src/Selection/types';

export interface RadioButtonStyleParams {
    /** Состояние наведения */
    hover?: boolean,

    /** Состояние компонента */
    checked?: boolean,

    /** Наличие ошибки */
    hasError?: boolean,

    /** Размер компонента */
    size?: SelectionSize,

    /** Отключение возможности фокуса */
    disableFocus?: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled?: boolean,
}
