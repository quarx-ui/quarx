import { ClientRect } from '../../types';

export interface NodeScroll {
    scrollLeft: number;
    scrollTop: number;
}

/**
 * Виртуальный элемент для ручного позиционирования
 */
export type VirtualElement = {
    getBoundingClientRect(): ClientRect;
    contextElement?: HTMLElement | Node;
};
