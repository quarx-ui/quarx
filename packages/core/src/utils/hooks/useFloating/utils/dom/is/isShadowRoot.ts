import { getWindow } from '../getWindow';

export function isShadowRoot(node: Node): node is ShadowRoot {
    if (typeof ShadowRoot === 'undefined') {
        return false;
    }

    const OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}
