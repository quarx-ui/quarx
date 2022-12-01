import { OVER_SCREEN_DATATYPE, OVER_SCREEN_ROLE, ownerDocument } from '@core';

export const getOverScreens = (node: HTMLElement | null, uniqAttr?: string) => {
    const container = node
        ? node.parentNode
        : ownerDocument(node).body;

    const queryParams = uniqAttr
        ? `[data-component=${uniqAttr}]`
        : `[datatype=${OVER_SCREEN_DATATYPE}][role=${OVER_SCREEN_ROLE}]`;

    const modals = container?.querySelectorAll(`${queryParams}[aria-hidden=false]`) ?? [];

    return Array.from(modals);
};

export const getNextOverScreen = (node: HTMLElement, currentIndex: number, uniqAttr?: string): HTMLElement => {
    const modals = getOverScreens(node, uniqAttr);

    const nextModal = modals.find(
        (el) => el.getAttribute('data-index') === String(currentIndex - 1),
    );

    return nextModal as HTMLElement;
};
