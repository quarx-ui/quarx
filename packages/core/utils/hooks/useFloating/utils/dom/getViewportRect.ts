import { Arrangement, Rect } from '../../types';
import { ARRANGEMENTS } from '../../constants';
import { getWindow } from './getWindow';
import { getDocumentElement } from './getDocumentElement';
import { isLayoutViewport } from './isLayoutViewport';

export function getViewportRect(element: Element, arrangement: Arrangement): Rect {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const { visualViewport } = win;

    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;

    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;

        const layoutViewport = isLayoutViewport();

        if (layoutViewport || (!layoutViewport && arrangement === ARRANGEMENTS.fixed)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }

    return {
        width,
        height,
        x,
        y,
    };
}
