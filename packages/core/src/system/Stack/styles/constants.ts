import { valuesAsKeysFromArray } from '@core/utils';
import { Values } from '@core/types';

export const STACK_DIRECTION = valuesAsKeysFromArray([
    'column',
    'row',
]);

export type StackDirection = Values<typeof STACK_DIRECTION>

export const STACK_ORDER = valuesAsKeysFromArray([
    'default',
    'reverse',
]);

export type StackOrder = Values<typeof STACK_ORDER>

export const CHILD_TYPE = valuesAsKeysFromArray([
    'item',
    'divider',
]);

export type ChildType = Values<typeof CHILD_TYPE>