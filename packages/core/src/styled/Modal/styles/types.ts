import { Values } from '@core/types';
import { MODAL_SCROLL_BEHAVIOR } from '../common/constants';
import { BaseModalStyleParams } from '../common';

export type ModalScrollBehavior = Values<typeof MODAL_SCROLL_BEHAVIOR>

export interface OmittedModalStyleParams {
    hasChildren: boolean,
    hasHeader: boolean,
    hasFooter: boolean,
}

export interface ModalStyleParams extends
    BaseModalStyleParams,
    OmittedModalStyleParams
{
    /** Поведение при вертикальном переполнении компонента
     * @property window Компонент расширяется вместе с контентом
     * @property body Компонент расширяется до границ контейнера, а у контента появляется скролл
     *
     * @default body */
    scrollBehaviour: ModalScrollBehavior,
}
