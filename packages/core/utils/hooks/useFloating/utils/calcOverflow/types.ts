import {
    Arrangement,
    Boundary,
    ClippingContext,
    GetFloatingPositionContext, Offset,
    Position,
    RootBoundary,
} from '../../types';

export interface CalcOverflowOptions {
    /**
     * Позиционирование плавающего элемента
     * @default 'absolute'
     */
    arrangement?: Arrangement,
    /**
     * Элемент(ы), для которых рассчитывается переполнение
     * @default 'clippingParents'
     */
    boundary?: Boundary,
    /**
     * Корневой элемент, для которого проверяется переполнение
     * @default 'viewport'
     */
    rootBoundary?: RootBoundary,
    /**
     * Контекст элемента, для которого проверяется переполнение
     * @default 'floating'
     */
    clippingContext?: ClippingContext,
    /**
     * Отступы от границ переполнения
     * @default 0
     */
    offset?: Offset,
}

export type CalcOverflowProps =
    & CalcOverflowOptions
    & Position
    & Pick<GetFloatingPositionContext, 'rects' | 'anchor' | 'floating'>
