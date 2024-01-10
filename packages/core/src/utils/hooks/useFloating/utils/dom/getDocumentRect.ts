import { Rect } from '../../types';
import { getDocumentElement } from './getDocumentElement';
import { getNodeScroll } from './getNodeScroll';
import { getComputedStyle } from './getComputedStyle';
import { getWindowScrollBarX } from './getWindowScrollBarX';

export function getDocumentRect(element: HTMLElement): Rect {
    const { max } = Math;

    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument?.body;

    const width = max(
        html.scrollWidth,
        html.clientWidth,
        body ? body.scrollWidth : 0,
        body ? body.clientWidth : 0,
    );
    const height = max(
        html.scrollHeight,
        html.clientHeight,
        body ? body.scrollHeight : 0,
        body ? body.clientHeight : 0,
    );

    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
        x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
        width,
        height,
        x,
        y,
    };
}
