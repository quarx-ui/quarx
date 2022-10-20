import { ownerDocument, ownerWindow } from '@core/utils';

export const getModals = (node: HTMLElement) => {
    const container = node
        ? node.parentNode
        : ownerDocument(node).body;

    const modals = container?.querySelectorAll('[datatype=modal][role=presentation][aria-hidden=false]') ?? [];

    return Array.from(modals);
};

export const getNextModal = (node: HTMLElement, currentTabIndex: number): HTMLElement => {
    const modals = getModals(node);

    const nextModal = modals.find(
        (el) => el.getAttribute('tabIndex') === String(currentTabIndex - 1),
    );

    return nextModal as HTMLElement;
};

export const getScrollbarSize = (document: Document) => {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(ownerWindow(document).innerWidth - documentWidth);
};

export type DefaultStyles = Record<string, string>

export const restoreStyles = (node: HTMLElement, defaultStyles: DefaultStyles) => {
    Object.entries(defaultStyles).forEach(([style, value]) => {
        if (value) {
            node.style.setProperty(style, value);
        } else {
            node.style.removeProperty(style);
        }
    });
};
