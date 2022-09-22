import { PickQxSize } from '@core/enums';

export type SelectionSize = PickQxSize<'small' | 'medium' | 'large'>;
export type SelectionBorderRadius = 'square' | 'smooth'; // TODO refactor

export interface OmittedStyleParams {
    subShown?: boolean,
}

export interface SelectionStyleParams extends OmittedStyleParams {
    /** Размер компонента */
    size?: SelectionSize,

    /** Отключить компонент */
    disabled?: boolean,

    /** Состояние фокуса */
    focused?: boolean,

    /** Фон при наведении */
    styleHover?: 'default' | 'smooth',

    /** Скругление компонента */
    borderRadius?: SelectionBorderRadius,
}
