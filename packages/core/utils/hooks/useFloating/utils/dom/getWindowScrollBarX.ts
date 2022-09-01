import { getBoundingClientRect } from './getBoundingClientRect';
import { getDocumentElement } from './getDocumentElement';
import { getNodeScroll } from './getNodeScroll';

export function getWindowScrollBarX(element: Element): number {
    // TODO нет поддержки RTL
    return (
        getBoundingClientRect(getDocumentElement(element)).left
        + getNodeScroll(element).scrollLeft
    );
}
