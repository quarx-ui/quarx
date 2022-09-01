/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWindow } from '../getWindow';

export function isHTMLElement(value: any): value is HTMLElement {
    return value instanceof getWindow(value).HTMLElement;
}
