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
    /** @description Размер компонента
     *
     * @default medium */
    size: ModalSize;

    /** @description Поведение при вертикальном переполнении компонента
     * @property window Компонент расширяется вместе с контентом
     * @property body Компонент расширяется до границ контейнера, а у контента появляется скролл
     *
     * @default body */
    scrollBehaviour: ModalScrollBehavior;
}
