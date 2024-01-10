/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWindow } from '../getWindow';

export function isElement(value: any): value is Element {
    return value instanceof getWindow(value).Element;
}
