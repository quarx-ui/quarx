import { Position } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isPosition = (anchor: any): anchor is Position => (
    anchor.x !== undefined && anchor.y !== undefined
);
