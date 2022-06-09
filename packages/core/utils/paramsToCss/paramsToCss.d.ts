import { CSSObject } from '@emotion/react';

export function paramsToCss<P extends string>(param: P): (cssMap: Record<P, CSSObject>) => CSSObject;

// eslint-disable-next-line no-redeclare
export function paramsToCss<
    P1 extends string,
    P2 extends string
>(p1: P1, p2: P2): (cssMap: Record<P1, Record<P2, CSSObject>>) => CSSObject;

// eslint-disable-next-line no-redeclare
export function paramsToCss<
    P1 extends string,
    P2 extends string,
    P3 extends string,
>(p1: P1, p2: P2, p3: P3): (cssMap: Record<P1, Record<P2, Record<P3, CSSObject>>>) => CSSObject;
