/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWindow } from '../getWindow';

export function isNode(value: any): value is Node {
    return value instanceof getWindow(value).Node;
}
