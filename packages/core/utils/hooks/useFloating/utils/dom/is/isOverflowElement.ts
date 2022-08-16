import { getComputedStyle } from '../getComputedStyle';

export function isOverflowElement(element: HTMLElement): boolean {
    const {
        overflow,
        overflowX,
        overflowY,
    } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
