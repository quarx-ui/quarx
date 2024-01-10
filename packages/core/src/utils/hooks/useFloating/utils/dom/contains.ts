import { isShadowRoot } from './is';

export function contains(parent: Element, child: Element): boolean {
    const rootNode = child.getRootNode?.();

    if (parent.contains(child)) {
        return true;
    }
    if (rootNode && isShadowRoot(rootNode)) {
        let next = child;
        do {
            if (next && parent === next) {
                return true;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            next = next.parentNode || (next as any).host;
        } while (next);
    }

    return false;
}
