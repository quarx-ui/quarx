import { isContainingBlock, isHTMLElement, isShadowRoot, isTableElement } from './is';
import { getParentNode } from './getParentNode';
import { getNodeName } from './getNodeName';
import { getWindow } from './getWindow';

function getTrueOffsetParent(element: Element): Element | null {
    if (
        !isHTMLElement(element)
        || getComputedStyle(element).position === 'fixed'
    ) {
        return null;
    }

    return element.offsetParent;
}

function getContainingBlock(element: Element) {
    let currentNode: Node | null = getParentNode(element);

    if (isShadowRoot(currentNode)) {
        currentNode = currentNode.host;
    }

    while (
        isHTMLElement(currentNode)
        && !['html', 'body'].includes(getNodeName(currentNode))
    ) {
        if (isContainingBlock(currentNode)) {
            return currentNode;
        }
        const parent = currentNode.parentNode as Node;
        currentNode = isShadowRoot(parent) ? parent.host : parent;
    }

    return null;
}

// Возвращает ближайшего предка с заданным позиционированием
export function getOffsetParent(element: Element): Element | Window {
    const window = getWindow(element);

    let offsetParent = getTrueOffsetParent(element);

    while (
        offsetParent
        && isTableElement(offsetParent)
        && getComputedStyle(offsetParent).position === 'static'
    ) {
        offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (
        offsetParent
        && (getNodeName(offsetParent) === 'html'
            || (getNodeName(offsetParent) === 'body'
                && getComputedStyle(offsetParent).position === 'static'
                && !isContainingBlock(offsetParent)))
    ) {
        return window;
    }

    return offsetParent || getContainingBlock(element) || window;
}
