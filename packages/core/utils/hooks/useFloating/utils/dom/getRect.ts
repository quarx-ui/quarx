import { Arrangement, Position, Rect } from '../../types';
import { ARRANGEMENTS } from '../../constants';
import { isPosition } from '../isPosition';

export function getRect(element: HTMLElement | Position, arrangement: Arrangement): Rect {
    if (isPosition(element)) {
        return {
            ...element,
            width: 0,
            height: 0,
        };
    }

    if (arrangement === ARRANGEMENTS.fixed) {
        return element.getBoundingClientRect().toJSON();
    }

    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        height: element.clientHeight,
        width: element.clientWidth,
    };
}
