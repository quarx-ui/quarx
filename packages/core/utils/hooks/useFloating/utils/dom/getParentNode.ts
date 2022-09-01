import { getNodeName } from './getNodeName';
import { isShadowRoot } from './is';
import { getDocumentElement } from './getDocumentElement';

export function getParentNode(node: Node): Node {
    if (getNodeName(node) === 'html') {
        return node;
    }

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        node.assignedSlot
        || node.parentNode
        || (isShadowRoot(node) ? node.host : null)
        || getDocumentElement(node)
    );
}
