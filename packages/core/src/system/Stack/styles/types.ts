import { StackDirection, StackOrder } from './constants';

type JustifyContent =
     | 'flex-start'
     | 'flex-end'
     | 'center'
     | 'space-between'
     | 'space-around'
     | 'space-evenly'

type AlignItems =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'

export interface StackStyleParams {
    /** Отступ между элементами контейнера
     *
     * @default 8px */
    spacing: string;

    /** Направление расположения элементов
     *
     * @property column
     * элементы расположены на вертикальной оси
     *
     * @property row
     * элементы расположены на горизонтальной оси
     *
     * @default column */
    direction: StackDirection;

    /** Порядок расположения элементов в контейнере
     *
     * @property default
     * расположение элементов в стандартном порядке
     *
     * @property reverse
     * расположение элементов в обратном порядке
     *
     * @default default */
    order: StackOrder;

    /** Наличие разделителя между элементами стека */
    divider?: boolean;

    /** Отображение контейнера в виде строчного элемента (inline-flex)
     *
     * @default false */
    inline: boolean;

    /** Выравнивание элементов по основной линии.
     * Значения аналогичны css-свойству `justify-content` для flex-контейнеров */
    justifyContent?: JustifyContent;

    /** Выравнивание элементов по второстепенной линии.
     * Значения аналогичны css-свойству `align-items` для flex-контейнеров */
    alignItems?: AlignItems;
}
