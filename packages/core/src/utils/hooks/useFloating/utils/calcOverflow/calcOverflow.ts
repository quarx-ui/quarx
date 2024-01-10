import { OffsetMap, Side } from '../../types';
import { getOffsetMap } from '../getOffsetMap';
import {
    offsetParentRelativeRectToViewportRelativeRect,
    getClippingRect,
    getOffsetParent,
    rectToClientRect,
} from '../dom';
import { ARRANGEMENTS, ROOT_BOUNDARIES, SIDES } from '../../constants';
import { CalcOverflowProps } from './types';

/**
 * Возвращает объект со значениями переполнения, которые содержат значения
 * выхода краев элемента за пределы заданной границы.
 * - положительное значение – выход за пределы границы на n `px`
 * - отрицательное значение – сколько `px` осталось до границы
 * - 0 – на границе
 */
export function calcOverflow(
    props: CalcOverflowProps,
): OffsetMap {
    const {
        x,
        y,
        rects,
        floating,
        arrangement = ARRANGEMENTS.absolute,
        rootBoundary = ROOT_BOUNDARIES.viewport,
        offset = 0,
        boundary = 'clippingParents',
        // elementContext = 'floating', // TODO
    } = props;

    const offsetMap = getOffsetMap(offset);

    const clippingClientRect = rectToClientRect(
        getClippingRect({
            element: floating,
            boundary,
            rootBoundary,
            arrangement,
        }),
    );

    const elementClientRect = rectToClientRect(
        offsetParentRelativeRectToViewportRelativeRect({
            arrangement,
            offsetParent: getOffsetParent?.(floating),
            rect: {
                ...rects.floating,
                x,
                y,
            },
        }),
    );

    const calcSide = (side: Side, opposite = false) => (
        offsetMap[side] + (clippingClientRect[side] - elementClientRect[side]) * (opposite ? -1 : 1)
    );

    return {
        top: calcSide(SIDES.top),
        left: calcSide(SIDES.left),
        right: calcSide(SIDES.right, true),
        bottom: calcSide(SIDES.bottom, true),
    };
}
