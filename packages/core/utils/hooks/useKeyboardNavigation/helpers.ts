import { ARROW_KEYS, ORIENTATIONS } from './constants';
import { ArrowKey, Orientation } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const nextFocus = (list: HTMLElement, currentFocus: Element | null): any => {
    if (list === currentFocus) {
        return list.firstChild;
    }

    if (currentFocus && currentFocus.nextElementSibling) {
        return currentFocus.nextElementSibling;
    }

    return list.firstChild;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const prevFocus = (list: HTMLElement, currentFocus: Element | null): any => {
    if (list === currentFocus) {
        return list.lastChild;
    }

    if (currentFocus && currentFocus.previousElementSibling) {
        return currentFocus.previousElementSibling;
    }

    return list.lastChild;
};

export const moveFocus = (
    list: HTMLElement,
    currentFocus: Element | null,
    traversalFunction: typeof prevFocus,
) => {
    let wrappedOnce = false;
    let nextItem = traversalFunction(list, currentFocus);

    while (nextItem) {
        if (nextItem === list.firstChild) {
            if (wrappedOnce) {
                return;
            }
            wrappedOnce = true;
        }

        const nextFocusDisabled = nextItem.disabled
            || nextItem.getAttribute('aria-disabled') === 'true'
            || nextItem.getAttribute('tabindex') < 0;

        if (!nextItem.hasAttribute('tabindex') || nextFocusDisabled) {
            nextItem = traversalFunction(list, nextItem);
        } else {
            nextItem.focus();
            return;
        }
    }
};

export const arrowKeyToFocusHandler: Record<ArrowKey, typeof nextFocus> = {
    [ARROW_KEYS.ArrowUp]: prevFocus,
    [ARROW_KEYS.ArrowDown]: nextFocus,
    [ARROW_KEYS.ArrowLeft]: prevFocus,
    [ARROW_KEYS.ArrowRight]: nextFocus,
};

export const orientationToKeys: Record<Orientation, ArrowKey[]> = {
    [ORIENTATIONS.horizontal]: [ARROW_KEYS.ArrowLeft, ARROW_KEYS.ArrowRight],
    [ORIENTATIONS.vertical]: [ARROW_KEYS.ArrowUp, ARROW_KEYS.ArrowDown],
};
