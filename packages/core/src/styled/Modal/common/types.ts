import { PickQxSize, Values } from '@core';
import { ReactNode } from 'react';
import { MODAL_DIRECTION } from './constants';

export type ModalSize = PickQxSize<'small' | 'medium'>
export type ModalDirection = Values<typeof MODAL_DIRECTION>

export interface BaseModalStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: ModalSize,
}

export interface BaseModalProps {
    /** Дочерний элемент, при передаче которого будут заменены все остальные элементы */
    children?: ReactNode,
}
