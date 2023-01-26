import { CssProperties } from '@core/types';
import { StackDirection, StackOrder } from './constants';

type DirectionAndOrderToOffsetProperty = Record<StackDirection, Record<StackOrder, keyof CssProperties>>

export const directionAndOrderToOffsetProperty: DirectionAndOrderToOffsetProperty = {
    row: {
        default: 'marginRight',
        reverse: 'marginLeft',
    },
    column: {
        default: 'marginBottom',
        reverse: 'marginTop',
    },
};
