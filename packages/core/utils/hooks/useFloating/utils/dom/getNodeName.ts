import { isWindow } from './is';

export function getNodeName(node: Node | Window): string {
    if (isWindow(node)) {
        return '';
    }

    return node
        ? (node.nodeName || '').toLowerCase()
        : '';
}
