import { PickSxBorderSize, PickSxSize } from '@core/enums';

export type SelectionSize = PickSxSize<'small' | 'medium' | 'large'>;
export type SelectionBorderRadius = PickSxBorderSize<'square' | 'smooth'>;

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
