import { Arrangement, Rect } from '../../types';
import { ARRANGEMENTS } from '../../constants';
import { isHTMLElement, isOverflowElement } from './is';
import { getDocumentElement } from './getDocumentElement';
import { getNodeName } from './getNodeName';
import { getNodeScroll } from './getNodeScroll';
import { getBoundingClientRect } from './getBoundingClientRect';

export function offsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    arrangement,
}: {
    rect: Rect;
    offsetParent: Element | Window;
    arrangement: Arrangement;
}): Rect {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);

    if (offsetParent === documentElement) {
        return rect;
    }

    let scroll = {
        scrollLeft: 0,
        scrollTop: 0,
    };
    const offsets = {
        x: 0,
        y: 0,
    };

    if (
        isOffsetParentAnElement
        || (!isOffsetParentAnElement && arrangement !== ARRANGEMENTS.fixed)
    ) {
        if (
            getNodeName(offsetParent) !== 'body'
            || isOverflowElement(documentElement)
        ) {
            scroll = getNodeScroll(offsetParent);
        }

        if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }

    return {
        ...rect,
        x: rect.x - scroll.scrollLeft + offsets.x,
        y: rect.y - scroll.scrollTop + offsets.y,
    };
}
