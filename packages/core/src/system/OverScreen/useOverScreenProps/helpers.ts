import { ownerDocument, ownerWindow } from '@core/utils';
import { OVER_SCREEN_DATATYPE, OVER_SCREEN_ROLE } from '@core/src/system/OverScreen';

export const getDialogs = (node: HTMLElement, uniqAttr?: string) => {
    const container = node
        ? node.parentNode
        : ownerDocument(node).body;

    const queryParams = uniqAttr
        ? `[data-component=${uniqAttr}]`
        : `[datatype=${OVER_SCREEN_DATATYPE}][role=${OVER_SCREEN_ROLE}]`;

    const modals = container?.querySelectorAll(`${queryParams}[aria-hidden=false]`) ?? [];

    return Array.from(modals);
};

export const getNextDialog = (node: HTMLElement, currentIndex: number, uniqAttr?: string): HTMLElement => {
    const modals = getDialogs(node, uniqAttr);

    const nextModal = modals.find(
        (el) => el.getAttribute('data-index') === String(currentIndex - 1),
    );

    return nextModal as HTMLElement;
};

export const getScrollbarSize = (document: Document) => {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(ownerWindow(document).innerWidth - documentWidth);
};

export type DefaultStyles = Record<string, string>

export const restoreStyles = (node: HTMLElement, defaultStyles: DefaultStyles) => {
    Object
        .entries(defaultStyles)
        .forEach(([style, value]) => {
            if (value) {
                node.style.setProperty(style, value);
            } else {
                node.style.removeProperty(style);
            }
        });
};

export const disableNextBackdrop = (node: HTMLElement) => {
    const backdrop = node.querySelector('[data-component=QxBackdrop][aria-hidden=false]') as HTMLElement;

    const storedStyles: DefaultStyles = {
        opacity: backdrop.style.opacity,
    };

    if (backdrop) {
        backdrop.style.opacity = '0';
    }

    return [backdrop, storedStyles];
};
