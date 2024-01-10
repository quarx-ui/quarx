import { getUAString } from '../getUAString';
import { getComputedStyle } from '../getComputedStyle';

export function isContainingBlock(element: Element): boolean {
    const isFirefox = /firefox/i.test(getUAString());
    const css = getComputedStyle(element);

    return (
        css.transform !== 'none'
        || css.perspective !== 'none'
        || css.contain === 'paint'
        || ['transform', 'perspective'].includes(css.willChange)
        || (isFirefox && css.willChange === 'filter')
        || (isFirefox && (css.filter ? css.filter !== 'none' : false))
    );
}
