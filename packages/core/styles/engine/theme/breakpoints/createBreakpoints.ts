import { BreakpointKey, Breakpoints, BreakpointValues, CreateBreakpointsArg, Point } from './types';
import { BREAKPOINT_KEYS, BREAKPOINT_KEYS_ARR } from './constants';

export function createBreakpoints({
    values: overwriteValues = {},
    unit = 'px',
    step = 5,
}: CreateBreakpointsArg = {}): Breakpoints {
    const values: BreakpointValues = { ...{
        XS: 320,
        S: 768,
        M: 1024,
        L: 1280,
        XL: 1440,
    },
    ...overwriteValues };

    const getValue = (point: Point): number => (
        typeof point === 'number'
            ? point
            : values[point]
    );

    const less = (value: number): number => value - step / 100;

    function up(point: Point): string {
        const value = getValue(point);
        return `@media (min-width:${value}${unit})`;
    }

    function down(point: Point): string {
        const value = getValue(point);
        return `@media (max-width:${less(value)}${unit})`;
    }

    function between(first: Point, second: Point): string {
        const firstValue = getValue(first);
        const secondValue = getValue(second);
        return `@media (min-width:${firstValue}${unit}) and (max-width:${less(secondValue)}${unit})`;
    }

    function only(key: BreakpointKey): string {
        if (key === BREAKPOINT_KEYS_ARR[0]) {
            return down(BREAKPOINT_KEYS_ARR[1]);
        }

        const [lastKey] = BREAKPOINT_KEYS_ARR.slice(-1);

        if (key === lastKey) {
            return up(key);
        }
        const firstValue = values[key];
        const nextKey = BREAKPOINT_KEYS_ARR[BREAKPOINT_KEYS_ARR.indexOf(key) + 1];
        const secondValue = values[BREAKPOINT_KEYS[nextKey]];
        return between(firstValue, secondValue);
    }

    return ({
        keys: BREAKPOINT_KEYS,
        values,
        up,
        down,
        between,
        only,
    });
}
