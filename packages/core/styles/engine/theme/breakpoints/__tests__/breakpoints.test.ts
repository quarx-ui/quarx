import { Narrow, createBreakpoints, BreakpointKey, Breakpoints } from '@core';
import { BREAKPOINT_KEYS as KEYS } from '../constants';

type MethodKey = Narrow<keyof Breakpoints, 'up' | 'down' | 'only'>
type ResultMap = Record<BreakpointKey, string>

const results: Record<MethodKey, ResultMap> = {
    up: {
        XS: '@media (min-width:320px)',
        S: '@media (min-width:768px)',
        M: '@media (min-width:1024px)',
        L: '@media (min-width:1280px)',
        XL: '@media (min-width:1440px)',
    },
    down: {
        XS: '@media (max-width:319.95px)',
        S: '@media (max-width:767.95px)',
        M: '@media (max-width:1023.95px)',
        L: '@media (max-width:1279.95px)',
        XL: '@media (max-width:1439.95px)',
    },
    only: {
        XS: '@media (max-width:767.95px)',
        S: '@media (min-width:768px) and (max-width:1023.95px)',
        M: '@media (min-width:1024px) and (max-width:1279.95px)',
        L: '@media (min-width:1280px) and (max-width:1439.95px)',
        XL: '@media (min-width:1440px)',
    },
};

describe('breakpoints', () => {
    const { up, down, between, only } = createBreakpoints();

    it('up', () => {
        Object.entries(results.up).forEach(([key, result]) => {
            expect(up(key as BreakpointKey)).toBe(result);
        });
        expect(up(540)).toBe('@media (min-width:540px)');
    });

    it('down', () => {
        Object.entries(results.down).forEach(([key, result]) => {
            expect(down(key as BreakpointKey)).toBe(result);
        });
        expect(down(540)).toBe('@media (max-width:539.95px)');
    });

    it('only', () => {
        Object.entries(results.only).forEach(([key, result]) => {
            expect(only(key as BreakpointKey)).toBe(result);
        });
    });

    test.each`
    point1      |   point2      |   result
    ${KEYS.XS}  |   ${KEYS.M}   |   ${'@media (min-width:320px) and (max-width:1023.95px)'}
    ${KEYS.XS}  |   ${KEYS.L}   |   ${'@media (min-width:320px) and (max-width:1279.95px)'}
    ${KEYS.S}   |   ${KEYS.L}   |   ${'@media (min-width:768px) and (max-width:1279.95px)'}
    ${123}      |   ${321}      |   ${'@media (min-width:123px) and (max-width:320.95px)'}
    `('between', ({ point1, point2, result }) => {
        expect(between(point1, point2)).toBe(result);
    });
});
