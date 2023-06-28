import { Values, valuesAsKeysFromArray } from '@core';

export const ACTIVE_FIELD_TYPE = valuesAsKeysFromArray(['START', 'END'] as const);

export type ActiveFieldType = Values<typeof ACTIVE_FIELD_TYPE>;
