import { CssProperties } from '@core/types';
import { StackDirection, StackOrder } from './constants';

type DirectionAndOrderToOffsetProperty = Record<StackDirection, Record<StackOrder, keyof CssProperties>>

export const directionAndOrderToOffsetProperty: DirectionAndOrderToOffsetProperty = {
    row: {
        forward: 'marginRight',
        reverse: 'marginLeft',
    },
    column: {
        forward: 'marginBottom',
        reverse: 'marginTop',
    },
};
