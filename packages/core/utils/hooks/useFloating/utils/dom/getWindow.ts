import { isWindow } from './is';

export function getWindow(node: Node | Window): Window {
    if (node == null) {
        return window;
    }

    if (!isWindow(node)) {
        const { ownerDocument } = node;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
}
