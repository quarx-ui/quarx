import { ClientRect } from '../../types';
import { isElement, isHTMLElement } from './is';
import { getWindow } from './getWindow';
import { VirtualElement } from './types';
import { isLayoutViewport } from './isLayoutViewport';

export function getBoundingClientRect(
    element: Element | VirtualElement,
    includeScale = false,
    isFixedStrategy = false,
): ClientRect {
    const { round } = Math;

    const clientRect = element.getBoundingClientRect();

    let scaleX = 1;
    let scaleY = 1;

    if (includeScale && isHTMLElement(element)) {
        scaleX = element.offsetWidth > 0
            ? round(clientRect.width) / element.offsetWidth || 1
            : 1;
        scaleY = element.offsetHeight > 0
            ? round(clientRect.height) / element.offsetHeight || 1
            : 1;
    }

    const win = isElement(element) ? getWindow(element) : window;
    const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;

    const x = (clientRect.left
            + (addVisualOffsets ? win.visualViewport?.offsetLeft ?? 0 : 0))
        / scaleX;
    const y = (clientRect.top
            + (addVisualOffsets ? win.visualViewport?.offsetTop ?? 0 : 0))
        / scaleY;
    const width = clientRect.width / scaleX;
    const height = clientRect.height / scaleY;

    return {
        width,
        height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x,
        y,
    };
}
