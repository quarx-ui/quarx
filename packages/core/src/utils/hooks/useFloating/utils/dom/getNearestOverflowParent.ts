import { isHTMLElement, isOverflowElement } from './is';
import { getNodeName } from './getNodeName';
import { getParentNode } from './getParentNode';

export function getNearestOverflowParent(node: Node): HTMLElement {
    const parentNode = getParentNode(node);

    if (['html', 'body', '#document'].includes(getNodeName(parentNode))) {
        return (node.ownerDocument as Document).body;
    }

    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }

    return getNearestOverflowParent(parentNode);
}
