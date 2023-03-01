import { Values } from '@core/types';
import { PickQxSize } from '@core/enums';
import { MODAL_SCROLL_BEHAVIOR } from '../constants';

export type ModalSize = PickQxSize<'small' | 'medium'>
export type ModalScrollBehavior = Values<typeof MODAL_SCROLL_BEHAVIOR>

export interface OmittedModalStyleParams {
    hasHeader: boolean;
    hasFooter: boolean;
}

export interface ModalStyleParams extends OmittedModalStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: ModalSize;

    /** Поведение при вертикальном переполнении компонента
     * - **window** – компонент расширяется вместе с контентом
     * - **body** – компонент расширяется до границ контейнера, а у контента появляется скролл
     *
     * @default body */
    scrollBehaviour: ModalScrollBehavior;
}
