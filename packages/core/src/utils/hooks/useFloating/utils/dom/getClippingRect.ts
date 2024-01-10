import { Arrangement, ClientRect, Rect, Boundary, RootBoundary } from '../../types';
import { ARRANGEMENTS, ROOT_BOUNDARIES } from '../../constants';
import { getDocumentElement } from './getDocumentElement';
import { getOverflowParents } from './getOverflowParents';
import { getComputedStyle } from './getComputedStyle';
import { isElement, isHTMLElement } from './is';
import { getNodeName } from './getNodeName';
import { getBoundingClientRect } from './getBoundingClientRect';
import { getOffsetParent } from './getOffsetParent';
import { contains } from './contains';
import { getDocumentRect } from './getDocumentRect';
import { getViewportRect } from './getViewportRect';
import { rectToClientRect } from './rectToClientRect';

function getInnerBoundingClientRect(
    element: Element,
    arrangement: Arrangement,
): ClientRect {
    const clientRect = getBoundingClientRect(
        element,
        false,
        arrangement === ARRANGEMENTS.fixed,
    );
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    return {
        top,
        left,
        x: left,
        y: top,
        right: left + element.clientWidth,
        bottom: top + element.clientHeight,
        width: element.clientWidth,
        height: element.clientHeight,
    };
}

function getClientRectFromClippingParent(
    element: Element,
    clippingParent: Element | RootBoundary,
    strategy: Arrangement,
): ClientRect {
    if (clippingParent === ROOT_BOUNDARIES.viewport) {
        return rectToClientRect(getViewportRect(element, strategy));
    }

    if (isElement(clippingParent)) {
        return getInnerBoundingClientRect(clippingParent, strategy);
    }

    return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}

/**
 * "clipping parent" – это переполняемый контейнер, который скрывает элементы,
 * выходящие за его границы. Определяется по css-свойству `position`, со значениями
 * не равными `initial`
 */
function getClippingParents(element: Element): Array<Element> {
    const clippingParents = getOverflowParents(element);
    const canEscapeClipping = Object.keys(ARRANGEMENTS).includes(
        getComputedStyle(element).position as Arrangement,
    );
    const clipperElement = canEscapeClipping && isHTMLElement(element)
        ? getOffsetParent(element)
        : element;

    if (!isElement(clipperElement)) {
        return [];
    }

    return clippingParents.filter(
        (el) => isElement(el)
            && contains(el, clipperElement)
            && getNodeName(el) !== 'body',
    ) as Element[];
}

/**
 * Рассчитывает границы области, в которой элемент будет видимым,
 * на основании переполняемых предков элемента в DOM-дереве
 */
export function getClippingRect({
    element,
    boundary,
    rootBoundary,
    arrangement,
}: {
    element: Element;
    boundary: Boundary;
    rootBoundary: RootBoundary;
    arrangement: Arrangement;
}): Rect {
    const mainClippingParents = boundary === 'clippingParents'
        ? getClippingParents(element)
        : [].concat(boundary);
    const clippingParents = [...mainClippingParents, rootBoundary];
    const firstClippingParent = clippingParents[0];

    const clippingRect = clippingParents.reduce((acc, clippingParent) => {
        const rect = getClientRectFromClippingParent(
            element,
            clippingParent,
            arrangement,
        );

        const { max, min } = Math;

        acc.top = max(rect.top, acc.top);
        acc.right = min(rect.right, acc.right);
        acc.bottom = min(rect.bottom, acc.bottom);
        acc.left = max(rect.left, acc.left);

        return acc;
    }, getClientRectFromClippingParent(element, firstClippingParent, arrangement));

    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top,
    };
}
