import { Values } from '@core';
import { BREAKPOINT_KEYS } from './constants';

export type BreakpointKeys = typeof BREAKPOINT_KEYS;
export type BreakpointKey = Values<BreakpointKeys>

export type BreakpointValues = Record<BreakpointKey, number>

export type Point = BreakpointKey | number

export interface CreateBreakpointsArg {
    values?: Partial<BreakpointValues>;
    unit?: string;
    step?: number;
}

export interface Breakpoints {
    keys: BreakpointKeys;
    values: BreakpointValues;
    up(point: Point): string;
    down(point: Point): string;
    between(first: Point, second: Point): string;
    only(key: BreakpointKey): string;
}
